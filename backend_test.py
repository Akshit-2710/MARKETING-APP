import requests
import sys
from datetime import datetime
import json

class MarketingAgencyAPITester:
    def __init__(self, base_url="https://media-agency-site-1.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, method, endpoint, expected_status, data=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"Response: {json.dumps(response_data, indent=2)}")
                except:
                    print(f"Response text: {response.text[:200]}")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"Response: {response.text[:200]}")

            return success, response.json() if response.headers.get('content-type', '').startswith('application/json') else {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

    def test_root_endpoint(self):
        """Test the root API endpoint"""
        return self.run_test(
            "Root API Endpoint",
            "GET",
            "api/",
            200
        )

    def test_create_contact(self, name, email, phone, message, service_interest):
        """Test contact form submission"""
        contact_data = {
            "name": name,
            "email": email,
            "phone": phone,
            "message": message,
            "service_interest": service_interest
        }
        
        success, response = self.run_test(
            "Create Contact Submission",
            "POST",
            "api/contact",
            200,
            data=contact_data
        )
        return response.get('id') if success else None

    def test_get_contacts(self):
        """Test retrieving contact submissions"""
        success, response = self.run_test(
            "Get Contact Submissions",
            "GET",
            "api/contact",
            200
        )
        return success, response

    def test_contact_form_validation(self):
        """Test contact form with missing required fields"""
        # Test with missing name
        success, _ = self.run_test(
            "Contact Form - Missing Name",
            "POST",
            "api/contact",
            422,  # Validation error expected
            data={"email": "test@example.com", "message": "Test message"}
        )
        
        # Test with missing email
        success, _ = self.run_test(
            "Contact Form - Missing Email",
            "POST",
            "api/contact",
            422,  # Validation error expected
            data={"name": "Test User", "message": "Test message"}
        )
        
        # Test with missing message
        success, _ = self.run_test(
            "Contact Form - Missing Message",
            "POST",
            "api/contact",
            422,  # Validation error expected
            data={"name": "Test User", "email": "test@example.com"}
        )

def main():
    # Setup
    tester = MarketingAgencyAPITester()
    timestamp = datetime.now().strftime('%H%M%S')
    
    print("🚀 Starting Marketing Agency API Tests")
    print("=" * 50)

    # Test 1: Root endpoint
    tester.test_root_endpoint()

    # Test 2: Create contact submission
    contact_id = tester.test_create_contact(
        name=f"Test User {timestamp}",
        email=f"test{timestamp}@example.com",
        phone="+1234567890",
        message="This is a test message for the marketing agency contact form.",
        service_interest="Digital Marketing"
    )

    # Test 3: Get contact submissions
    success, contacts = tester.test_get_contacts()
    if success and isinstance(contacts, list):
        print(f"📊 Found {len(contacts)} contact submissions in database")
        if contacts:
            print("Latest submission preview:")
            latest = contacts[-1] if contacts else {}
            print(f"  Name: {latest.get('name', 'N/A')}")
            print(f"  Email: {latest.get('email', 'N/A')}")
            print(f"  Service: {latest.get('service_interest', 'N/A')}")

    # Test 4: Form validation
    tester.test_contact_form_validation()

    # Test 5: Create another contact with minimal data
    minimal_contact_id = tester.test_create_contact(
        name=f"Minimal User {timestamp}",
        email=f"minimal{timestamp}@example.com",
        phone="",  # Optional field
        message="Minimal test message",
        service_interest=""  # Optional field
    )

    # Print final results
    print("\n" + "=" * 50)
    print(f"📊 Final Results: {tester.tests_passed}/{tester.tests_run} tests passed")
    
    if tester.tests_passed == tester.tests_run:
        print("🎉 All tests passed!")
        return 0
    else:
        print("⚠️  Some tests failed")
        return 1

if __name__ == "__main__":
    sys.exit(main())
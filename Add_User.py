from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
from selenium.webdriver.common.by import By
import random
driver = webdriver.Chrome()

with open("Names.txt","r") as f:
    names = f.read().split()

def generate_email(name):
    return(name+"@gmail.com")

def generate_password(name):
    return("password"+name[:3])


def get_random_blood_group():
    blood_groups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]
    return random.choice(blood_groups)

def get_random_city():
    cities = [
    "Kazhakootam",  
    "Varkala",
    "Kovalam",
    "Neyyattinkara",
    "Nedumangad",
    "Attingal",
    "Balaramapuram",
    "Vattiyoorkavu",
    "Nemom",
    "Vizhinjam"
]
    return random.choice(cities)
def generate_phone_number():
    # Generate random digits for the phone number
    number = ''.join(random.choices('0123456789', k=10))
    
    # Format the phone number with dashes
    formatted_number = f'{number[:3]}-{number[3:6]}-{number[6:]}'
    return formatted_number

for name in names[:1]:
    driver.get('http://localhost:3000/register')
    # fill in the form fields
    name_input = driver.find_element(By.ID,'userName')
    name_input.send_keys(name)

    email_input = driver.find_element(By.ID,'userEmail')
    email_input.send_keys(generate_email(name))

    number_input = driver.find_element(By.ID,'userNumber')
    number_input.send_keys(generate_phone_number())

    password_input = driver.find_element(By.ID,'userPassword')
    password_input.send_keys(generate_password(name))

    age_input = driver.find_element(By.ID,'userAge')
    age_input.send_keys(random.randint(18, 40))

    blood_group_select = driver.find_element(By.ID,'userBloodGroup')
    blood_group_select.click()
    blood_group_option = driver.find_element(By.XPATH,"//option[@value='{}']".format(get_random_blood_group()))
    blood_group_option.click()

    weight_input = driver.find_element(By.ID,'userWeight')
    weight_input.send_keys(random.randint(40, 70))

    location_input = driver.find_element(By.ID,'userLocation')
    location_input.send_keys(get_random_city())

    # submit the form
    submit_button = driver.find_element(By.XPATH,"//input[@type='submit']")
    submit_button.click()

    # wait for the success page to load and print the page title
    time.sleep(2) # wait for 2 seconds for the page to load
    print(driver.title)
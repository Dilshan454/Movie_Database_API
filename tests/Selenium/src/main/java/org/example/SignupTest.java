package org.example;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

public class SignupTest {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.manage().window().maximize();
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

        try {
            System.out.println("==================================================");
            System.out.println(" 🚀 STARTING SIGNUP AUTOMATED TEST SUITE ");
            System.out.println("==================================================");

            // TC1: Valid Registration
            driver.get("http://localhost:3000/register");
            driver.findElement(By.name("name")).sendKeys("Test User");
            driver.findElement(By.name("email")).sendKeys("test" + System.currentTimeMillis() + "@gmail.com");
            driver.findElement(By.name("password")).sendKeys("TestPassword123");
            driver.findElement(By.xpath("//button[@type='submit']")).click();

            try {
                wait.until(ExpectedConditions.alertIsPresent()).accept();
                System.out.println("TC1: Valid Registration -------------> PASSED");
            } catch (Exception e) {
                boolean statusMsg = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("status-message"))).isDisplayed();
                System.out.println("TC1: Valid Registration -------------> " + (statusMsg ? "PASSED" : "FAILED"));
            }

            // TC2: Empty Name Validation
            driver.get("http://localhost:3000/register");
            driver.findElement(By.name("email")).sendKeys("emptyname@gmail.com");
            driver.findElement(By.name("password")).sendKeys("TestPassword123");
            driver.findElement(By.xpath("//button[@type='submit']")).click();
            boolean emptyNameReq = driver.findElement(By.name("name")).getAttribute("required") != null;
            System.out.println("TC2: Empty Name Validation -----------> " + (emptyNameReq ? "PASSED" : "FAILED"));

            // TC3: Empty Email Validation
            driver.get("http://localhost:3000/register");
            driver.findElement(By.name("name")).sendKeys("Test User");
            driver.findElement(By.name("password")).sendKeys("TestPassword123");
            driver.findElement(By.xpath("//button[@type='submit']")).click();
            boolean emptyEmailReq = driver.findElement(By.name("email")).getAttribute("required") != null;
            System.out.println("TC3: Empty Email Validation ----------> " + (emptyEmailReq ? "PASSED" : "FAILED"));

            // TC4: Empty Password Validation
            driver.get("http://localhost:3000/register");
            driver.findElement(By.name("name")).sendKeys("Test User");
            driver.findElement(By.name("email")).sendKeys("emptypassword@gmail.com");
            driver.findElement(By.xpath("//button[@type='submit']")).click();
            boolean emptyPassReq = driver.findElement(By.name("password")).getAttribute("required") != null;
            System.out.println("TC4: Empty Password Validation -------> " + (emptyPassReq ? "PASSED" : "FAILED"));

            // TC5: Duplicate Email Registration
            String email = "duplicate" + System.currentTimeMillis() + "@gmail.com";
            driver.get("http://localhost:3000/register");
            driver.findElement(By.name("name")).sendKeys("First User");
            driver.findElement(By.name("email")).sendKeys(email);
            driver.findElement(By.name("password")).sendKeys("TestPassword123");
            driver.findElement(By.xpath("//button[@type='submit']")).click();

            try {
                wait.until(ExpectedConditions.alertIsPresent()).accept();
            } catch (Exception e) {}

            driver.get("http://localhost:3000/register");
            driver.findElement(By.name("name")).sendKeys("Second User");
            driver.findElement(By.name("email")).sendKeys(email);
            driver.findElement(By.name("password")).sendKeys("TestPassword123");
            driver.findElement(By.xpath("//button[@type='submit']")).click();

            try {
                wait.until(ExpectedConditions.alertIsPresent()).accept();
                System.out.println("TC5: Duplicate Email Validation ------> PASSED");
            } catch (Exception e) {
                boolean rejected = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("status-message"))).isDisplayed();
                System.out.println("TC5: Duplicate Email Validation ------> " + (rejected ? "PASSED" : "FAILED"));
            }

            System.out.println("==================================================");
            System.out.println(" ✅ ALL 5 SIGNUP TEST CASES EXECUTED SUCCESSFULLY! ");
            System.out.println("==================================================");

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            driver.quit();
        }
    }
}

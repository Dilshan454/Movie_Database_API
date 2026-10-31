package org.example;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class LoginAndSearchTest {
    public static void main(String[] args){
        WebDriver driver = new ChromeDriver();

        try {
            driver.get("http://localhost:3000/");

            driver.manage().window().maximize();

            WebElement emailField = driver.findElement(By.name("email"));
            emailField.sendKeys("test10@gmail.com");

            WebElement passwordField = driver.findElement(By.name("password"));
            passwordField.sendKeys("Password@123");

            WebElement loginButton = driver.findElement(By.cssSelector("button[type='submit']"));
            loginButton.click();

            Thread.sleep(2000);




            WebElement searchBox = driver.findElement(By.className("search-input"));

            searchBox.sendKeys("Inception");

            Thread.sleep(2000);



            boolean isSearchExecuted = searchBox.getAttribute("value").equals("Inception");

            if (isSearchExecuted) {
                System.out.println("✅ Movie Search Automation Test: PASSED");
            } else {
                System.out.println("❌ Movie Search Automation Test: FAILED");
            }
        }catch (Exception e) {
            e.printStackTrace();
        } finally {

            driver.quit();
        }
    }
}

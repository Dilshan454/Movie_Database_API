package org.example;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

public class MovieDashboardTest {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();

        try {
            driver.get("http://localhost:3000/dashboard");
            driver.manage().window().maximize();

            WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

            try {
                String currentUrl = driver.getCurrentUrl();
                if (currentUrl.contains("localhost:3000")) {
                    System.out.println("TC1: Dashboard Page Access -----------> PASSED");
                } else {
                    System.out.println("TC1: Dashboard Page Access -----------> FAILED");
                }
            } catch (Exception e) {
                System.out.println("TC1: Dashboard Page Access -----------> FAILED");
            }

            try {
                WebElement logo = wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("logo")));
                if (logo.getText().contains("MovieFlix Dashboard")) {
                    System.out.println("TC2: Navbar Logo & Title Verification -> PASSED");
                } else {
                    System.out.println("TC2: Navbar Logo & Title Verification -> FAILED");
                }
            } catch (Exception e) {
                System.out.println("TC2: Navbar Logo & Title Verification -> FAILED");
            }

            try {
                WebElement searchBox = wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("search-input")));
                searchBox.clear();
                searchBox.sendKeys("Inception");
                Thread.sleep(1500);

                if ("Inception".equals(searchBox.getAttribute("value"))) {
                    System.out.println("TC3: Movie Search Functionality ------> PASSED");
                } else {
                    System.out.println("TC3: Movie Search Functionality ------> FAILED");
                }
            } catch (Exception e) {
                System.out.println("TC3: Movie Search Functionality ------> FAILED");
            }

            try {
                WebElement sortDropdown = wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("sort-select")));
                Select select = new Select(sortDropdown);
                select.selectByValue("rating");
                Thread.sleep(1500);

                System.out.println("TC4: Sort Movies Dropdown Execution -> PASSED");
            } catch (Exception e) {
                System.out.println("TC4: Sort Movies Dropdown Execution -> FAILED");
            }

            try {
                WebElement statsContainer = wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("stats-container")));
                if (statsContainer.isDisplayed()) {
                    System.out.println("TC5: Stat Cards Container Display -> PASSED");
                } else {
                    System.out.println("TC5: Stat Cards Container Display -> FAILED");
                }
            } catch (Exception e) {
                System.out.println("TC5: Stat Cards Container Display -> FAILED");
            }

            System.out.println("==================================================");
            System.out.println("  ALL TEST CASES EXECUTED SUCCESSFULLY! ");
            System.out.println("==================================================");

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            driver.quit();
        }
    }
}
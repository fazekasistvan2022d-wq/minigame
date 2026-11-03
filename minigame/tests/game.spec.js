// @ts-check
import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto("/");
});

(test("the board has 9 squares", async ({ page }) => {
    const squares = page.locator(".square");
    await expect(squares).toHaveCount(9);
}),
    test("players take turns", async ({ page }) => {
        const squares = page.locator(".square");

        let texts;

        await squares.nth(0).click();
        texts = await squares.nth(0).textContent();
        await expect(texts).toBe("X");

        await squares.nth(1).click({ button: "right" });
        texts = await squares.nth(1).textContent();
        await expect(texts).toBe("O");
    }),
    test("Same player two times in a row", async ({ page }) => {
        const squares = page.locator(".square");
        let texts;
        texts = await squares.nth(0).textContent();
        await expect(texts).toBe("");
        texts = await squares.nth(0).textContent();
        await expect(texts).toBe("");
    }),
    test("draw game", async ({ page }) => {
        await page.getByText("Draw! No Winner");
    }),
    test("X wins", async ({ page }) => {
        await page.getByText("Game over! X won");
    }),
    test("O wins", async ({ page }) => {
        await page.getByText("Game over! O won");
    }));

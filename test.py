import asyncio
from playwright.async_api import async_playwright

HIGHLIGHT_DURATION = 2000  # milliseconds


async def open_web_app(page, url="https://gym-front-end.vercel.app/"):
    await page.goto(url)
    print("✅ Successfully navigated to the homepage.")
    await page.wait_for_timeout(2000)


async def navigate_to_login(page):
    print("🔁 Clicking the 'Login' navigation link...")
    await page.get_by_role("link", name="Login", exact=True).first.click()
    print("⏳ Waiting for login form to become visible...")
    await page.wait_for_selector("text='Login'", timeout=10000)
    await page.wait_for_timeout(1000)

    # Print partial page HTML for debugging selectors
    html = await page.content()
    print("---- Login Page HTML (first 5000 chars) ----")
    print(html[:5000])
    print("---- End of HTML ----")

    print("✅ Login form is now visible.")


async def highlight_box(page, locator, duration=HIGHLIGHT_DURATION):
    element_handle = await locator.element_handle()
    if not element_handle:
        print("❌ Element handle not found for highlighting.")
        return

    await page.evaluate(
        """([element, duration]) => {
            const box = document.createElement('div');
            const rect = element.getBoundingClientRect();
            box.style.position = 'absolute';
            box.style.left = rect.left + window.scrollX + 'px';
            box.style.top = rect.top + window.scrollY + 'px';
            box.style.width = rect.width + 'px';
            box.style.height = rect.height + 'px';
            box.style.backgroundColor = 'rgba(255, 255, 0, 0.3)';
            box.style.border = '3px solid orange';
            box.style.borderRadius = '8px';
            box.style.zIndex = 9999;
            box.style.pointerEvents = 'none';
            document.body.appendChild(box);
            setTimeout(() => box.remove(), duration);
        }""",
        [element_handle, duration]
    )


async def login_sanity_check(page):
    print("\n🔍 --- Login Form Sanity Checks ---")

    async def safe_check(label, locators):
        found = False
        for locator in locators:
            try:
                count = await locator.count()
                if count == 0:
                    continue
                visible = await locator.first.is_visible()
                if visible:
                    print(f"✅ {label} found via locator: {locator}")
                    found = True
                    await highlight_box(page, locator.first)
                    await page.wait_for_timeout(HIGHLIGHT_DURATION + 200)
                    break
            except Exception:
                continue
        if not found:
            print(f"❌ {label} NOT found using any locator.")

    await safe_check("Login heading", [
        page.get_by_role("heading", name="Login", exact=True),
        page.get_by_text("Login"),
        page.locator("h1"),
        page.locator("h2"),
    ])

    await safe_check("Email input", [
        page.get_by_label("Email", exact=True),
        page.get_by_placeholder("Email"),
        page.locator("input[type='email']"),
        page.locator("input#email"),
        page.locator("input[name='email']")
    ])

    await safe_check("Password input", [
        page.get_by_label("Password", exact=True),
        page.get_by_placeholder("Password"),
        page.locator("input[type='password']"),
        page.locator("input#password"),
        page.locator("input[name='password']")
    ])

    await safe_check("Submit button", [
        page.get_by_role("button", name="SUBMIT"),
        page.get_by_text("SUBMIT"),
        page.locator("button[type='submit']")
    ])

    await safe_check("Sign up text", [
        page.get_by_text("Don't have an account?"),
        page.locator("text=Don't have an account?")
    ])

    await safe_check("Sign up link", [
        page.get_by_role("link", name="Sign up!"),
        page.get_by_text("Sign up!"),
        page.locator("a[href*='signup']"),
    ])

    print("✅ All login elements checked.\n")
    await page.wait_for_timeout(1000)


async def navigate_to_about(page):
    print("🔁 Clicking the 'About' navigation link...")
    await page.get_by_role("link", name="About", exact=True).first.click()
    # Wait for 'ABOUT' header or page-related content to load (tweak selector if needed)
    await page.wait_for_selector("text='ABOUT'", timeout=10000)
    print("✅ About page is now visible.")
    await page.wait_for_timeout(3000)  # Wait 3 seconds so you can see the About page


async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=False)  # So you can see what's happening
        context = await browser.new_context()
        page = await context.new_page()

        await open_web_app(page)
        await navigate_to_login(page)
        await login_sanity_check(page)
        await navigate_to_about(page)

        await browser.close()
        print("🎉 Browser has been closed.")


if __name__ == "__main__":
    asyncio.run(main())

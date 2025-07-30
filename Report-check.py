import pytest
import win32com.client as win32
from pathlib import Path
import re

# === Configuration ===
TEST_FILE = "test.py"
REPORT_FILE = "report.html"
RECIPIENT = "Swetha.Vasudevan@dell.com"  # Replace with your actual email

# === Step 1: Run tests and generate HTML report ===
pytest.main([
    TEST_FILE,
    f"--html={REPORT_FILE}",
    "--self-contained-html"
])

# === Step 2: Parse report.html to get summary ===
html_path = Path(REPORT_FILE)
passed = failed = skipped = 0

if html_path.exists():
    html_content = html_path.read_text(encoding="utf-8")

    # Look for summary like "1 Failed, 3 Passed, 0 Skipped"
    match = re.search(r"(\d+)\s+Failed,.*?(\d+)\s+Passed,.*?(\d+)\s+Skipped", html_content, re.DOTALL)
    if match:
        failed = int(match.group(1))
        passed = int(match.group(2))
        skipped = int(match.group(3))

    # Prepare clean summary
    summary = f"""
    <b>Pytest Execution Summary:</b><br>
    ✅ Passed: {passed}<br>
    ❌ Failed: {failed}<br>
    ⏭ Skipped: {skipped}<br><br>
    Please find the attached detailed HTML report.
    """

    # === Step 3: Send Email via Outlook ===
    outlook = win32.Dispatch('outlook.application')
    mail = outlook.CreateItem(0)
    mail.To = RECIPIENT
    mail.Subject = f" Test Report: {passed} Passed, {failed} Failed"
    mail.HTMLBody = summary
    mail.Attachments.Add(str(html_path.resolve()))
    mail.Send()

    print("✅ Email sent successfully with clean summary.")
else:
    print("❌ Report file not found.")

from flask import Flask, render_template, request, redirect, flash
import csv
import os

app = Flask(__name__)
app.secret_key = "supersecretkey"  # Required for flash messages

# Create submissions folder if not exists
os.makedirs("submissions", exist_ok=True)
CSV_FILE = "submissions/ideas.csv"

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/submit", methods=["POST"])
def submit():
    name = request.form.get("name")
    email = request.form.get("email")
    idea = request.form.get("idea")

    if not name or not email or not idea:
        flash("All fields are required.", "error")
        return redirect("/")

    # Save to CSV
    with open(CSV_FILE, "a", newline="", encoding="utf-8") as file:
        writer = csv.writer(file)
        writer.writerow([name, email, idea])

    flash("Thank you! Your idea has been submitted.", "success")
    return redirect("/")

if __name__ == "__main__":
    app.run(debug=True)

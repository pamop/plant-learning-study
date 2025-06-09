<template>
  <div class="form-container">
    <h2>Pre-Survey</h2>
    <form>
      <!-- Age -->
      <div class="form-group">
        <label for="age">Age:</label>
        <input type="number" v-model="formData.age" id="age" min="1" />
      </div>

      <!-- Grade -->
      <div class="form-group">
        <label for="grade">Grade:</label>
        <select v-model="formData.grade" id="grade">
          <option disabled value="">Select your grade</option>
          <option>9th</option>
          <option>10th</option>
          <option>11th</option>
          <option>12th</option>
          <option>Other</option>
        </select>
      </div>

      <!-- Show input box if "Other" is selected for grade -->
      <div v-if="formData.grade === 'Other'" class="mt-2">
        <label for="gradeOther">Please specify:</label>
        <input
          type="text"
          id="gradeOther"
          v-model="formData.gradeOther"
          placeholder="Please specify"
        />
      </div>

      <!-- Gender -->
      <div class="form-group">
        <label for="gender">Gender:</label>
        <select v-model="formData.gender" id="gender">
          <option disabled value="">Select your gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Non-binary</option>
          <option>Prefer not to say</option>
        </select>
      </div>

      <!-- Do you live in Tennessee? -->
      <label for="liveInTN" class="block mt-4">Do you live in Tennessee?</label>
      <select v-model="formData.liveInTN" id="liveInTN">
        <option disabled value="">Please select</option>
        <option>Yes</option>
        <option>No</option>
      </select>

      <!-- How long have you lived in Tennessee? (only if answered Yes) -->
      <div v-if="formData.liveInTN === 'Yes'" class="mt-2">
        <label for="yearsInTN"
          >How many years have you lived in Tennessee?</label
        >
        <input
          type="number"
          id="yearsInTN"
          v-model="formData.yearsInTN"
          min="0"
        />
      </div>

      <!-- Knowledge & Interest Questions -->
      <div v-for="(q, i) in scaleQuestions" :key="i" class="form-group">
        <label class="question-text">{{ q.text }}</label>
        <div class="scale-labels">
          <span>None</span>
          <div class="scale-options">
            <label v-for="n in 7" :key="n">
              <input
                type="radio"
                :name="`scale${i}`"
                :value="n"
                v-model="formData[q.model]"
              />
              {{ n }}
            </label>
          </div>
          <span>A lot</span>
        </div>
      </div>

      <!-- Short answer interest question -->
      <div class="form-group">
        <label for="interestShortAnswer">
          What are you most interested in when it comes to plants?
        </label>
        <textarea
          id="interestShortAnswer"
          v-model="formData.interestShortAnswer"
          rows="4"
        ></textarea>
      </div>
      <!-- Submit -->
      <!-- <button type="submit" :disabled="submitting">
        {{ submitting ? "Submitting..." : "Continue" }}
      </button> -->
      <p>
        <i
          >If this were the real experiment, you would be able to submit your
          survey responses here.</i
        >
      </p>
      <router-link to="/" class="demo-button">Go Home</router-link>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      submitting: false,
      formData: {
        age: "",
        grade: "",
        gradeOther: "",
        gender: "",
        liveInTN: "",
        yearsInTN: "",
        knowledgeGeneral: "",
        interestGeneral: "",
        interestNative: "",
        motivationGame: "",
        motivationArticle: "",
        natureTime: "",
        interestShortAnswer: "",
      },
      scaleQuestions: [
        {
          model: "knowledgeGeneral",
          text: "What would you rate your knowledge on plants?",
        },
        {
          model: "interestGeneral",
          text: "How interested are you in learning about plants?",
        },
        {
          model: "interestNative",
          text: "How interested are you in learning about plants that are native to Tennessee?",
        },
        {
          model: "motivationGame",
          text: "How motivated do you feel to learn about plants by playing a game?",
        },
        {
          model: "motivationArticle",
          text: "How motivated do you feel to learn about plants by reading an article?",
        },
        {
          model: "natureTime",
          text: "How much time do you spend in nature?",
        },
      ],
    };
  },
  methods: {
    async submitForm() {
      // Uncomment this block to enable form submission
      // if (this.submitting) return; // extra guard
      // this.submitting = true;
      // try {
      //   console.log("Submitting pre-survey data...");
      //   const pid = this.$route.params.pid; // Get participant ID from URL
      //   const scriptUrl =
      //     "https://script.google.com/macros/s/AKfycbwTvRoy02V9Cf7KQkVDE0npYlpNVN51mbN-jO2FrHdq7QLHun3nzCTRCAyJ6zMc71it/exec"; // Replace with your deployment URL
      //   try {
      //     // Prepare form data for your current script format
      //     const formPayload = new URLSearchParams();
      //     formPayload.append("pid", pid);
      //     formPayload.append("survey", "pre"); // Add stage to data
      //     formPayload.append("timestamp", new Date().toISOString());
      //     // Add all your form fields (match your sheet headers exactly)
      //     formPayload.append("age", this.formData.age);
      //     formPayload.append("grade", this.formData.grade);
      //     // Add all other fields...
      //     if (this.formData.grade === "Other") {
      //       formPayload.append("gradeOther", this.formData.gradeOther);
      //     }
      //     formPayload.append("gender", this.formData.gender);
      //     // Continue with all other fields...
      //     formPayload.append("liveInTN", this.formData.liveInTN);
      //     if (this.formData.liveInTN === "Yes") {
      //       formPayload.append("yearsInTN", this.formData.yearsInTN);
      //     }
      //     formPayload.append(
      //       "knowledgeGeneral",
      //       this.formData.knowledgeGeneral
      //     );
      //     formPayload.append("interestGeneral", this.formData.interestGeneral);
      //     formPayload.append("interestNative", this.formData.interestNative);
      //     formPayload.append("motivationGame", this.formData.motivationGame);
      //     formPayload.append(
      //       "motivationArticle",
      //       this.formData.motivationArticle
      //     );
      //     formPayload.append("natureTime", this.formData.natureTime);
      //     formPayload.append(
      //       "interestShortAnswer",
      //       this.formData.interestShortAnswer
      //     );
      //     // Log the payload for debugging
      //     console.log(
      //       "Submitting pre-survey data:",
      //       Object.fromEntries(formPayload)
      //     );
      //     // Send data to Google Sheets
      //     const response = await fetch(scriptUrl, {
      //       method: "POST",
      //       headers: {
      //         "Content-Type": "application/x-www-form-urlencoded", // Important for your current script
      //       },
      //       body: formPayload,
      //     });
      //     const result = await response.json();
      //     if (result.result === "success") {
      //       console.log("Data saved to row:", result.row);
      //     } else {
      //       throw new Error(result.error || "Submission failed");
      //     }
      //   } catch (error) {
      //     console.error("Submission error:", error);
      //     alert("Failed to submit form. Please try again.");
      //   }
      //   this.$router.push(`/treatment/${pid}`); // go to next page in route
      // } catch (error) {
      //   alert("Submission failed. Please try again.");
      //   console.error(error);
      //   this.submitting = false; // allow retry
      // }
    },
  },
};
</script>

<style scoped>
.form-container {
  max-width: 700px;
  margin: auto;
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
}
.form-group {
  margin-top: 2.5rem;
}
label {
  display: block;
  font-weight: 500;
  margin-bottom: 0.5rem;
}
input[type="number"],
select {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
}
.scale-labels {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.scale-options {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  flex-grow: 1;
}
button[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}

.demo-button {
  background-color: #468966;
  color: white;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.2s ease;
}

.demo-button:hover {
  background-color: #356b51;
}
</style>

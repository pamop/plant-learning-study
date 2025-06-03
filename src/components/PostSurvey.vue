<template>
  <div class="form-container">
    <h2>Post-Survey</h2>
    <form @submit.prevent="submitForm">
      <!-- Motivation scale question -->
      <div v-for="(q, i) in scaleQuestions" :key="i" class="form-group">
        <label class="question-text">{{ q.text }}</label>
        <div class="scale-labels">
          <span>Not at all</span>
          <div class="scale-options">
            <label v-for="n in 7" :key="n">
              <input
                type="radio"
                :name="`scale${i}`"
                :value="n"
                v-model="formData[q.model]"
                required
              />
              {{ n }}
            </label>
          </div>
          <span>A lot</span>
        </div>
      </div>
      <div><br /></div>
      <!-- Identification questions -->
      <div>
        <p><b>Identification</b></p>
        <p>Please identify the following plants.</p>
        <p>Do not use outside sources.</p>
        <p>All plants were in the game or article.</p>
      </div>
      <div v-for="(q, i) in plantQuestions" :key="i" class="form-group">
        <label class="question-text">{{ q.text }}</label>
        <img
          :src="q.image"
          :alt="'Plant image for question ' + (i + 1)"
          class="plant-image"
        />
        <div class="options">
          <label v-for="option in q.options" :key="option">
            <input
              type="radio"
              :name="`plant${q.id}`"
              :value="option"
              v-model="formData[q.model]"
              required
            />
            {{ option }}
          </label>
        </div>
      </div>

      <!-- Short answer interest question -->
      <div class="form-group">
        <label for="miscShortAnswer">
          Do you have any other comments about the activity?
        </label>
        <textarea
          id="miscShortAnswer"
          v-model="formData.miscShortAnswer"
          rows="4"
          required
        ></textarea>
      </div>
      <div>
        <p>
          Please wait a few seconds after clicking "Continue" for the final page
          to load.
        </p>
      </div>
      <!-- Submit -->
      <button type="submit">Continue</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        engagementPost: "",
        motivationPost: "",
        plant1: "",
        plant2: "",
        plant3: "",
        plant4: "",
        plant5: "",
        plant6: "",
        plant7: "",
        plant8: "",
        plant9: "",
        plant10: "",
        plant11: "",
        plant12: "",
        miscShortAnswer: "", // For any additional comments
      },
      scaleQuestions: [
        {
          model: "engagementPost",
          text: "How engaging was the activity?",
        },
        {
          model: "motivationPost",
          text: "How motivated were you to do this activity?",
        },
      ],
      plantQuestions: [
        {
          id: 1,
          model: "plant1",
          text: "1. Identify the plant in the image below:",
          image: "/plant-learning-study/images/plant_1.png",
          options: [
            "White oak",
            "Black walnut",
            "Crabapple tree",
            "African persimmon",
          ],
          selectedAnswer: null,
        },
        {
          id: 2,
          model: "plant2",
          text: "2. Identify the plant in the image below:",
          image: "/plant-learning-study/images/plant_2.png",
          options: ["Mangrove", "Water tupelo", "Water cypress", "White oak"],
          selectedAnswer: null,
        },
        {
          id: 3,
          model: "plant3",
          text: "3. Identify the plant in the image below:",
          image: "/plant-learning-study/images/plant_3.png",
          options: ["Raspberry", "Smooth blackberry", "Strawberry", "Holly"],
          selectedAnswer: null,
        },
        {
          id: 4,
          model: "plant4",
          text: "4. Identify the plant in the image below:",
          image: "/plant-learning-study/images/plant_4.png",
          options: ["Tulips", "Daffodils", "Marsh marigold", "Tiny aconites"],
          selectedAnswer: null,
        },
        {
          id: 5,
          model: "plant5",
          text: "5. Identify the plant in the image below:",
          image: "/plant-learning-study/images/plant_5.fruit.png",
          options: [
            "Muscadine grapes",
            "Lowbush blueberry",
            "Purple grape",
            "Black chokeberry",
          ],
          selectedAnswer: null,
        },
        {
          id: 6,
          model: "plant6",
          text: "6. Identify the plant in the image below:",
          image: "/plant-learning-study/images/plant_6.jpg",
          options: [
            "Pampas grass",
            "Flag iris",
            "Fountain grass",
            "Narrow leaf cattail",
          ],
          selectedAnswer: null,
        },
        {
          id: 7,
          model: "plant7",
          text: "7. Identify the plant in the image below:",
          image: "/plant-learning-study/images/plant_7.png",
          options: [
            "Wild strawberry",
            "Smooth blackberry",
            "Red raspberry",
            "Muscadine grape",
          ],
          selectedAnswer: null,
        },
        {
          id: 8,
          model: "plant8",
          text: "8. Identify the plant in the image below:",
          image: "/plant-learning-study/images/plant_8.png",
          options: [
            "Creeping phlox",
            "Black-eyed susans",
            "Beebalms",
            "Tennessee coneflower",
          ],
          selectedAnswer: null,
        },
        {
          id: 9,
          model: "plant9",
          text: "9. Identify the plant in the image below:",
          image: "/plant-learning-study/images/plant_9.png",
          options: [
            "Norway spruce",
            "Lebanon cedar",
            "Eastern red cedar",
            "Black hill spruce",
          ],
          selectedAnswer: null,
        },
        {
          id: 10,
          model: "plant10",
          text: "10. Identify the plant in the image below:",
          image: "/plant-learning-study/images/plant_10.png",
          options: [
            "Little sweet betsy",
            "Yellow trillium",
            "Large-flowered trillium",
            "Toadshade",
          ],
          selectedAnswer: null,
        },
        {
          id: 11,
          model: "plant11",
          text: "11. Identify the plant in the image below:",
          image: "/plant-learning-study/images/plant_11.png",
          options: [
            "Silverleaf mountain mint",
            "Purple coneflower",
            "Wild bergamot",
            "Butterfly weed",
          ],
          selectedAnswer: null,
        },
        {
          id: 12,
          model: "plant12",
          text: "12. Identify the plant in the image below:",
          image: "/plant-learning-study/images/plant_12.png",
          options: [
            "Black chokeberry",
            "Nightlock",
            "Mistletoe",
            "Lowbush blueberry",
          ],
          selectedAnswer: null,
        },
      ],
    };
  },
  methods: {
    async submitForm() {
      console.log("Submitting post-survey data...");
      const pid = this.$route.params.pid; // Get participant ID from URL
      this.treatment = this.$route.query.treatment || "unknown"; // Get treatment from query params

      const scriptUrl =
        "https://script.google.com/macros/s/AKfycbwTvRoy02V9Cf7KQkVDE0npYlpNVN51mbN-jO2FrHdq7QLHun3nzCTRCAyJ6zMc71it/exec"; // Replace with your deployment URL

      try {
        // Prepare form data for your current script format
        const formPayload = new URLSearchParams();

        formPayload.append("pid", pid);
        formPayload.append("survey", "post"); // Change stage to post
        formPayload.append("timestamp", new Date().toISOString());
        formPayload.append("treatment", this.treatment);

        // Add all your form fields (match your sheet headers exactly)
        formPayload.append("engagementPost", this.formData.engagementPost);
        formPayload.append("motivationPost", this.formData.motivationPost);
        formPayload.append("plant1", this.formData.plant1);
        formPayload.append("plant2", this.formData.plant2);
        formPayload.append("plant3", this.formData.plant3);
        formPayload.append("plant4", this.formData.plant4);
        formPayload.append("plant5", this.formData.plant5);
        formPayload.append("plant6", this.formData.plant6);
        formPayload.append("plant7", this.formData.plant7);
        formPayload.append("plant8", this.formData.plant8);
        formPayload.append("plant9", this.formData.plant9);
        formPayload.append("plant10", this.formData.plant10);
        formPayload.append("plant11", this.formData.plant11);
        formPayload.append("plant12", this.formData.plant12);
        formPayload.append("miscShortAnswer", this.formData.miscShortAnswer);

        // Log the payload for debugging
        console.log(
          "Submitting post-survey data:",
          Object.fromEntries(formPayload)
        );
        console.log("Sending survey type:", formPayload.get("survey")); // should log 'post'

        // Send data to Google Sheets
        const response = await fetch(scriptUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded", // Important for your current script
          },
          body: formPayload,
        });

        const result = await response.json();

        if (result.result === "success") {
          console.log("Data saved to row:", result.row);
        } else {
          throw new Error(result.error || "Submission failed");
        }
      } catch (error) {
        console.error("Submission error:", error);
        alert("Failed to submit form. Please try again.");
      }
      this.$router.push(`/thanks`); // go to next page in route
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
.options {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: flex-start; /* left-aligns label blocks */
  margin-top: 0.5rem;
}

.options label {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem; /* space between radio and label text */
  font-size: 1rem;
  cursor: pointer;
  white-space: nowrap; /* prevent text from wrapping */
}
input[type="radio"] {
  transform: scale(1.5);
  margin: 0;
}
.plant-image {
  max-width: 100%;
  width: 300px;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  margin-top: 0.5rem;
}
</style>

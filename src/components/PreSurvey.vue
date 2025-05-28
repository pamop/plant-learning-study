<template>
  <div class="form-container">
    <h2>Pre-Survey</h2>
    <form @submit.prevent="handleSubmit">
      <!-- Age -->
      <div class="form-group">
        <label for="age">Age:</label>
        <input type="number" v-model="formData.age" id="age" required min="1" />
      </div>

      <!-- Grade -->
      <div class="form-group">
        <label for="grade">Grade:</label>
        <select v-model="formData.grade" id="grade" required>
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
          placeholder="Enter grade"
          required
        />
      </div>

      <!-- Gender -->
      <div class="form-group">
        <label for="gender">Gender:</label>
        <select v-model="formData.gender" id="gender" required>
          <option disabled value="">Select your gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Non-binary</option>
          <option>Prefer not to say</option>
        </select>
      </div>

      <!-- Do you live in Tennessee? -->
      <label for="liveInTN" class="block mt-4">Do you live in Tennessee?</label>
      <select v-model="formData.liveInTN" id="liveInTN" required>
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
          required
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
                required
              />
              {{ n }}
            </label>
          </div>
          <span>A lot</span>
        </div>
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
        age: "",
        grade: "",
        gradeOther: "",
        gender: "",
        knowledgeGeneral: "",
        knowledgeNative: "",
        interestGeneral: "",
        interestNative: "",
        localPlantsAwareness: "",
      },
      scaleQuestions: [
        {
          model: "knowledgeGeneral",
          text: "How much do you know about plants in general?",
        },
        {
          model: "knowledgeNative",
          text: "How much do you know about native plants in Tennessee?",
        },
        {
          model: "interestGeneral",
          text: "How interested are you in learning about plants in general?",
        },
        {
          model: "interestNative",
          text: "How interested are you in learning about native plants in Tennessee?",
        },
        {
          model: "localPlantsAwareness",
          text: "How familiar are you with the plants growing in your local area?",
        },
      ],
    };
  },
  methods: {
    handleSubmit() {
      console.log("Submitting form data:", this.formData);
      // send data to Google Sheets here or emit to parent // TODO
      // Get pid from route params
      const pid = this.$route.params.pid;
      this.$router.push(`/treatment/${pid}`); // go to next page in route
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
</style>

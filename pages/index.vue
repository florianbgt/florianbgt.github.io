<template>
  <div>
    <b-container fluid class="text-center bg-light border-bottom border-dark p-5">
      <b-img thumbnail rounded="circle" :src="resume.information.picture" width="200px" height="auto"/>
      <h1>Hello, I'm <strong class="text-secondary">{{resume.information.name}}</strong></h1>
      <h3>{{resume.information.title}}</h3>
      <h3><small>{{resume.information.subTitle}}</small></h3>
    </b-container>
    <b-container fluid>
      <b-container class="mt-3">
        <b-row>
          <b-col xl="9" lg="8" md="7">
            <h2>ABOUT ME</h2>
            <p v-for="(paragraph, index) in resume.information.description" :key="index">{{paragraph}}</p>
          </b-col>
          <b-col xl="3" lg="4" md="5">
            <h2>CONTACT</h2>
            <div v-for="(contact, index) in resume.information.contacts" :key="index" class="mb-2">
              <fa :icon="contact.icon" style="font-size: 30px"/>
              <a :href="contact.url">{{contact.name}}</a>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
    <b-container fluid class="bg-light border-top border-dark">
      <b-container class="mt-3">
        <h2>SKILLS</h2>
        <b-row class="pb-3">
          <b-col lg="4" sm="6" v-for="(category, index) in resume.skillset" :key="index">
            <h4>{{category.category}}</h4>
            <SkillBar v-for="(skill, index) in category.skills" :key="index" :label="skill.name" :level="skill.level"/>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
    <b-container fluid v-if="'experiences' in resume && resume.experiences.length > 1" class="border-top border-dark">
      <b-container class="mt-3">
        <h2>EXPERIENCES</h2>
        <b-row v-for="(experience, index) in resume.experiences" :key="index">
          <b-col sm="6">
            <h4>
              <fa :icon="['fas', 'user']" style="font-size: 30px"/>
              {{experience.title}}
              <br>
              <small class="text-secondary">
                <fa :icon="['far', 'calendar-alt']" style="font-size: 25px"/>
                From {{new Date(year=experience.from.year, month=experience.from.month-1).toLocaleDateString(undefined, {year: 'numeric', month: 'long'})}}
                <template v-if="'to' in experience">
                  to {{new Date(year=experience.to.year, month=experience.to.month-1).toLocaleDateString(undefined, {year: 'numeric', month: 'long'})}}
                </template>
              </small>
            </h4>
          </b-col>
          <b-col sm="6">
            <h4>
              <fa :icon="['fas', 'briefcase']" style="font-size: 30px"/>
              {{experience.company}}
              <br>
              <small class="text-secondary">
                <fa :icon="['fas', 'map-marker-alt']" style="font-size: 25px"/>
                {{experience.location}}
              </small>
            </h4>
          </b-col>
          <b-col
            v-if="'description' in experience && experience.description.length > 0"
            :lg="'tasks' in experience && experience.tasks.length > 0 ? 4 : 12"
          >
            <p>{{experience.description}}</p>
          </b-col>
          <b-col
            v-if="'tasks' in experience && experience.tasks.length > 0"
            :lg="'description' in experience && experience.description.length > 0 ? 8 : 12"
          >
            <ul class="pl-3">
              <li v-for="(task, index) in experience.tasks" :key="index">{{task}}</li>
            </ul>
          </b-col>
          <b-col sm="6"/>
          <b-col sm="6" v-if="index != resume.experiences.length-1" class="my-3">
            <fa :icon="['fas', 'ellipsis-v']" style="font-size: 50px"/>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
    <b-container fluid v-if="'educations' in resume && resume.educations.length > 1" class="bg-light border-top border-dark">
      <b-container class="mt-3">
        <h2>EDUCATION</h2>
        <b-row v-for="(education, index) in resume.educations" :key="index">
          <b-col sm="6">
            <h4>
              <fa :icon="['fas', 'graduation-cap']" style="font-size: 30px"/>
              {{education.title}}
              <br>
              <small class="text-secondary">
                <fa :icon="['far', 'calendar-alt']" style="font-size: 25px"/>
                From {{new Date(year=education.from.year, month=education.from.month-1).toLocaleDateString(undefined, {year: 'numeric', month: 'long'})}}
                <template v-if="'to' in education">
                  to {{new Date(year=education.to.year, month=education.to.month-1).toLocaleDateString(undefined, {year: 'numeric', month: 'long'})}}
                </template>
              </small>
            </h4>
          </b-col>
          <b-col sm="6">
            <h4>
              <fa :icon="['fas', 'university']" style="font-size: 30px"/>
              {{education.school}}
              <br>
              <small class="text-secondary">
                <fa :icon="['fas', 'map-marker-alt']" style="font-size: 25px"/>
                {{education.location}}
              </small>
            </h4>
          </b-col>
          <b-col
            v-if="'description' in education && education.description.length > 0"
            :lg="'tasks' in education && education.tasks.length > 0 ? 4 : 12"
          >
            <p>{{education.description}}</p>
          </b-col>
          <b-col
            v-if="'tasks' in education && education.tasks.length > 0"
            :lg="'description' in education && education.description.length > 0 ? 8 : 12"
          >
            <ul class="pl-3">
              <li v-for="(task, index) in education.tasks" :key="index">{{task}}</li>
            </ul>
          </b-col>
          <b-col sm="6"/>
          <b-col sm="6" v-if="index != resume.educations.length-1" class="my-3">
            <fa :icon="['fas', 'ellipsis-v']" style="font-size: 50px"/>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
  </div>
</template>

<script>
export default {
  layout: 'home',

  async asyncData({ $content }) {
    const resume = await $content('resume').fetch();
    return { resume }
  }
}
</script>
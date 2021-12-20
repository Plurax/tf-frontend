<template>
<div class="container">
  <div class="py-12">
    <h2 class="text-2xl font-bold">Aufgabe hinzufügen</h2>
    <div class="mt-8 max-w-md">
      <div class="grid grid-cols-1 gap-6">
        <label class="block">
          <input v-model="task_title" type="text"
                 class="                   form-control
                   block
                   w-full
                   px-3
                   py-1.5
                   text-base
                   font-normal
                   text-gray-700
                   bg-white bg-clip-padding
                   border border-solid border-gray-300
                   rounded
                   transition
                   ease-in-out
                   m-0
                   focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Titel">
          <textarea
            v-model="description"
            class="
                   form-control
                   block
                   w-full
                   px-3
                   py-1.5
                   text-base
                   font-normal
                   text-gray-700
                   bg-white bg-clip-padding
                   border border-solid border-gray-300
                   rounded
                   transition
                   ease-in-out
                   m-0
                   focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      id="description"
      rows="3"
      placeholder="Beschreibung"
  ></textarea>
        </label>
        <button v-on:click="addTask" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Anlegen
        </button>
      </div>
      
    </div>
    
  </div>
  
</div>
</template>

<script>
import { mapState } from 'vuex';
import createTaskQuery from '~/apollo/queries/task/createTask'
import gql from 'graphql-tag';

export default {
  name: 'App',
  data () {
    return {
      tasks: [],
      error: null,
      task_title: null
    }
  },
  computed: {
    ...mapState({
      task: (state) => state.task
    }),
  },
  methods:{
    addTask: function() {
      this.$apollo.mutate({
        mutation: createTaskQuery,
        variables: { 
          title: this.task_title,
          description: this.description,
          users_permissions_user:1,
        }
      });
    }
  }
}
</script>

<template>
<div class="container">
  <div v-for="task in tasks" v-bind:key="task.id">
    <todoitem :id="task.id" :title="task.attributes.title" :description="task.attributes.description" :checked="task.attributes.checked"/>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex';
import tasksQuery from '~/apollo/queries/task/tasks'

export default {
  name: 'App',
  data () {
    return {
      tasks: [],
      error: null
    }
  },
  computed: {
    ...mapState({
      task: (state) => state.task
   }),
  },
  apollo: {
    tasks: {
      prefetch: false,
      query: tasksQuery,
      update(data) {
        return data.tasks.data;
      }
    }
  }
}
</script>

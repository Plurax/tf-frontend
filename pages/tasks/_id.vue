<template>
<div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
   <div class="mb-4">
     {{task.attributes.title}}
    </div>
    <div class="mb-6">
      {{task.attributes.description}}
   </div>
    <div class="flex items-center justify-between">
      
    </div>
</div>
</template>

<script>
import Vue from 'vue';
import { mapState } from 'vuex';
import taskQuery from '~/apollo/queries/task/task'

export default {
  data () {
    return {
      task: {},
      error: null,
    }
  },
  apollo: {
    task: {
      prefetch: true,
      query: taskQuery,
      variables() {
        return { id: this.$route.params.id }
      },
      update(data) {
        console.log("AAA ", data.task.data);
        return data.task.data;
      }
    }
  },
}
</script>


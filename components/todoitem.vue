<template>
<div class="inline-flex">
  <div class="bg-black border border-blue rounded py-1 px-3 bg-blue text-white has-tooltip">
    <button v-if="checked != true" class="btn btn-white mr-2" v-on:click="setTaskDone">
        <solid-check-circle-icon class="w-4 h-4"/>
    </button>{{ title }}
    <span class='tooltip rounded shadow-lg p-1 bg-gray-400'>{{description}}</span> 
  </div>
 </div>
</template>

<script>
import gql from 'graphql-tag';
import doneQuery from '~/apollo/queries/task/doneTask'

export default {
  props: [ 'id', 'checked','title','description'],
  data () {
    return {
      newDesc: "Das ist eine neue Description",
    }
  },
  methods: {
    setTaskDone: function() {
      this.$apollo.mutate({
        mutation: doneQuery,
        variables: {
          id: this.id,
          checked: !this.checked
        }
      });
    }
  }
};
</script>

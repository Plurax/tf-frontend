<template>
 <section class="section">
 <div class="container">
 <h1 class="text-6xl font-normal leading-normal mt-0 mb-2">Profil</h1>
 <div class="content">
 <p>
 <strong>Username:</strong>
 {{ loggedInUser.username }}
 </p>
 <p>
 <strong>Email:</strong>
 {{ loggedInUser.email }}
 </p>
 </div>
 </div>
 </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
 middleware: "auth",
 computed: {
 ...mapGetters(["loggedInUser"]),
 },
};
</script>

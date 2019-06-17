<template>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card" >
                <div class="card-header">
                    <h2>Login</h2>
                </div>
                <div class="card-body">
                    <form action="#" @submit.prevent="login">
                        <div class="form-group row">
                           <label for="email" class="col-md-4 col-form-label text-md-right">Email</label><br>
                           <div class="col-md-6">
                               <input type="email" name="email" id="email" class="login-input" v-model="email"><br>
                           </div>
                        </div> 
                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">Password</label><br>
                            <div class="col-md-6">
                                <input type="password" name="password" id="password" class="login-input" v-model="password"><br><br>
                            </div>
                        </div>
                        <button type="submit" class="btn-submit">Login</button>
                     </form>
                </div>
             </div>
         </div>
     </div>
</div>
</template>
<script>
export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    login() {
      this.$store.dispatch('loginToken', {
        email: this.email,
        password: this.password,
        
      })
      .then(response => {
          this.$router.push({ name: 'home' })
        }) 
    }
  }
}
</script>
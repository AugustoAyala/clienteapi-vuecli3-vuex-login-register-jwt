<template>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card" >
                <div class="card-header">
                    <h2>Register</h2>
                </div>
                <div class="card-body">
                    <form action="#" @submit.prevent="register">
                        <div class="form-group row">
                           <label for="email" class="col-md-4 col-form-label text-md-right">Ingrese su Nombre</label><br>
                           <div class="col-md-6">
                               <input type="text" name="name" id="name" class="login-input" v-model="name"><br>
                           </div>
                        </div> 
                        <div class="form-group row">
                           <label for="email" class="col-md-4 col-form-label text-md-right">Ingrese su Email</label><br>
                           <div class="col-md-6">
                               <input type="email" name="email" id="email" class="login-input" v-model="email"><br>
                           </div>
                        </div> 
                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">Ingrese su Password</label><br>
                            <div class="col-md-6">
                                <input type="password" name="password" id="password" class="login-input" v-model="password"><br><br>
                            </div>
                        </div>
                        <button type="submit" class="btn-submit">Agregar</button>
                     </form>
                </div>
             </div>
         </div>
     </div>
</div>
</template>
<script>
export default {
  name: 'register',
  data() {
    return {
      name:'',
      email: '',
      password: '',
    }
  },
  methods: {
    register() {
      this.$store.dispatch('register', {
        name: this.name,
        email: this.email,
        password: this.password,
      })
        .then(response => {
          this.$router.push({ name: 'login' })
        })
    }
  }
}
</script>

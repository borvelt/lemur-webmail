<template>
  <SelectBox
    v-model="email"
    :items="users"
    :mapper="mapper"
    :on-change="onChange"
    name="users"
  />
</template>

<script>
import SelectBox from '~/components/SelectBox'

export default {
  components: { SelectBox },
  props: {},
  data: function() {
    return {
      email: this.$store.state.user.current.email
    }
  },
  computed: {
    users() {
      return [
        { name: 'borvelt', email: 'borvelt@gmail.com' },
        { name: 'Lenny Montana', email: 'lucabrasi@gmail.com' },
        { name: 'Walter Bishop', email: 'walterbishop@gmail.com' },
        { name: 'Ernest Rutherford', email: 'erru@gmail.com' },
        { name: 'Ted Beneke', email: 'ted@gmail.com' }
      ]
    }
  },
  methods: {
    _findUser(email) {
      return this.users.filter(user => user.email === email)
    },
    onChange($event) {
      const user = this._findUser($event.target.value)[0]
      this.$store.commit('user/change', user)
    },
    mapper(x) {
      return { key: x.email, value: x.name }
    }
  }
}
</script>

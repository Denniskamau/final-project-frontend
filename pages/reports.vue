<template>
  <div>
    <Navbar />
    <Sidebar />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar';
import Sidebar from '~/components/Sidebar'

export default {
 name: 'Reports',
  components: {
    Navbar,
    Sidebar
  },
}
</script>

<style>

</style>

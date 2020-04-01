<template>
    <q-list bordered separator>
        <q-item-label header class="text-bold flex justify-between items-center">
          <div>{{label}}</div>
          <q-btn rounded color="accent" size="md" @click="update(null)" label="Reset" />
        </q-item-label>
        <q-item v-for="item in items" :key="item.ID" tag="label" clickable v-ripple>
            <q-item-section avatar>
                <q-radio :value="value" :val="item.slug" dark @input="update" color="accent" />
            </q-item-section>
            <q-item-section class="text-white">{{item.name}}</q-item-section>
            <q-item-section side>
                <q-badge color="secondary" :label="item.post_count" />
            </q-item-section>
        </q-item>
    </q-list>
</template>
<script>
export default {
  name: 'listSelector',
  props: {
    label: {
      type: String
    },
    items: {
      type: Array,
      required: true
    },
    value: {
      type: String
    }
  },
  methods: {
    update (value) {
      this.$emit('input', value)
    }
  }
}
</script>

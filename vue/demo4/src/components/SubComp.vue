<template>
  <div>
    这是子组件SubComp
    <slot>9999999</slot>
  </div>
</template>

<script>
export default {
  name: 'SubComp',
  data() {
    return {
      msg: 'this is a data ...',
    };
  },
  props: {
    one: {
      type: String,
    },
    two: {
      type: String,
    },
  },

  // props传过来的属性 context上下文
  setup(props, context) {
    // 在创建组件之间调用的，没有this
    console.log('setup()---');
    console.log(this);
    console.log(props.one + props.two);
    console.log(context.attrs.desc);
    console.log(context.slots.default);
    context.emit('myadd', '向父组件传递数据');
  },
  beforeCreate() {
    console.log('beforeCreate() ###');
  },
  created() {
    console.log('created() $$$');
    console.log(this.one);
    console.log(this.two);
  },
  methods: {
  },
};
</script>

<style scoped>

</style>

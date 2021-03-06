<template lang="pug">
.the-header
  .logo-or-name(@click="back")
    img.logo(src="static/logo/logoNav.png")
    .name {{ softConfig.softName }}
  .navigation-bar(v-if="!user.student")
    .items(
      v-for="(item, index) in navList",
      :class="{ active: index === active }",
      @click="changePath(item.path)"
    ) {{ item.name }}
  .navigation-bar(v-else)
  .user-profile(ref="userProfile")
    a-badge
      b-icon(type="icontongzhi4", :style="{ fontSize: '24px', cursor: 'pointer' }")
    a-popover(
      placement="bottom",
      :getPopupContainer="() => $refs.userProfile"
    )
      template(#content)
        .menu
          .menu-item.align-items-center(@click="changePath('/Teacher/userInfo')")
            b-icon(type="iconzhanghao", :style="{ fontSize: '16px' }")
            span 个人中心
          .menu-item.align-items-center(@click="changePath('/Teacher/exhibition')")
            b-icon(type="iconchakan", :style="{ fontSize: '16px' }")
            span 组件展示
          .menu-item.align-items-center(@click="outLogin")
            b-icon(type="icontuichu11", :style="{ fontSize: '16px' }")
            span 退出账号
      .user
        a-avatar(shape="square", :size="32", :src="user.headImagePath")
        .name {{ user.name }}
</template>
<script lang="ts">
import { computed, defineAsyncComponent, defineComponent } from 'vue';
import {
  Badge, Avatar, Popover,
} from 'ant-design-vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import getDefaultRoutes from '@/router/defaultRoutes';
import { UserRole } from '@/types/user';

export default defineComponent({
  components: {
    aBadge: Badge,
    bIcon: defineAsyncComponent(() => import('@/components/BaseIcon.vue')),
    aAvatar: Avatar,
    aPopover: Popover,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    const role = sessionStorage.getItem('role') as UserRole | null;

    function changePath(path: string) {
      if (route.path === path) {
        return;
      }
      router.push(path);
    }
    function outLogin() {
      localStorage.clear();
      sessionStorage.clear();
      router.go(0);
    }
    function back() {
      if (role === 'student') {
        router.push('/Student');
      } else if (role === 'teacher') {
        router.push('/Teacher/userlist');
      } else if (role === 'admin') {
        router.push('/Teacher/userlist');
      } else {
        router.push('/Login');
      }
    }

    const navList = getDefaultRoutes(role);
    const user = computed(() => store.state.user.user);
    const active = computed(() => navList.findIndex(((value) => route.path === value.path)));
    const softConfig = computed(() => store.state.system.softConfig);
    return {
      navList,
      changePath,
      outLogin,
      active,
      softConfig,
      back,
      user,
    };
  },
});
</script>
<style lang="stylus" scoped>
.the-header
  min-width 1366px
  height 60px
  background rgba(255, 255, 255, 1)
  display flex
  align-items center
  padding 0 90px 0 110px
  .logo-or-name
    display flex
    cursor pointer
    .logo
      width 24px
      height 18px
      margin-right 8px
    .name
      font-size 14px
      font-family MicrosoftYaHeiUI
      color rgba(42, 46, 54, 1)
  .navigation-bar
    display flex
    align-items center
    margin-left 48px
    font-size 14px
    font-family MicrosoftYaHeiUI
    color rgba(42, 46, 54, 1)
    height 100%
    line-height 100%
    flex 1
    .items
      cursor pointer
      height 100%
      line-height 60px
      text-align center
      width 90px
    .active
      color $primary-color //rgba(74, 144, 226, 1)
      border-bottom 3px solid $primary-color
  .user-profile
    display flex
    align-items center
    width 124px
    justify-content space-between
    font-size 14px
    font-family MicrosoftYaHeiUI
    color rgba(42, 46, 54, 1)
    :deep()
        .ant-popover-inner-content
            padding 0
    .user
      cursor pointer
      display flex
      align-items center
      .name
        margin-left 16px
    .menu
      width 120px
      padding 0 16px
      // padding-top 16px
      .menu-item
        cursor pointer
        height 36px
        font-size:14px;
        font-family:MicrosoftYaHeiUI;
        color:rgba(42,46,54,1);
        text-align center
        display flex
        justify-content: space-between;
</style>

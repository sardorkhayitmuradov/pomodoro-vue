<template>
  <div
    class="max-w-screen-desktop mx-auto w-full flex items-center justify-center"
  >
    <div class="max-w-[410px] w-full mx-auto">
      <h1 class="font-RobotoBold text-lg text-center text-grey mb-[55px]">
        pomodoro
      </h1>
      <div
        class="max-w-[373px] w-full flex items-center relative z-10 justify-between mx-auto bg-dark-blue p-[7px] rounded-[31px] mb-[45px]"
      >
        <Tabs class="bg-red">pomodoro</Tabs>
        <Tabs class="bg-red">short break</Tabs>
        <Tabs class="bg-red">long break</Tabs>
      </div>

      <div class="mb-[63px]">
        <div
          class="w-full h-[410px] circle flex items-center justify-center rounded-full"
        >
          <div
            class="max-w-[366px] w-full h-[366px] bg-dark-blue rounded-full flex items-center justify-center"
          >
            <div
              class="max-w-[339px] w-full h-[339px] flex items-center justify-center flex-col"
            >
              <h1 class="mb-[19px] text-xl font-KumbhsBold text-grey">17:59</h1>
              <p class="text-body-2 font-KumbhsBold tracking-[15px] text-grey cursor-pointer">
                PAUSE
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center cursor-pointer">
        <i class="bx bxs-cog text-[28px] text-center"></i>
      </div>
    </div>
  </div>
</template>

<script>
import Tabs from './components/Tabs/index.vue';
export default {
  name: 'App',
  components: {
    Tabs,
  },
};
</script>

<style></style>

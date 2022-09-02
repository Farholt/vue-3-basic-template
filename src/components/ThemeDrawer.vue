<template>
  <a-button @click="showDrawer" :style="{ position: 'absolute', bottom: '15px', right: '15px' }"
    ><template #icon><SettingOutlined /></template
  ></a-button>
  <a-drawer
    placement="right"
    :closable="false"
    v-model:visible="visible"
    @afterVisibleChange="afterVisibleChange"
    :width="400"
  >
    <template #title>
      <SettingOutlined :style="{ marginRight: '8px' }" />
      <span>Settings</span>
    </template>
    <div :style="{ marginBottom: '24px' }">
      <div :style="{ height: '23px', marginBottom: '10px' }">
        <h4>
          Playlist style setting
          <LoadingOutlined v-if="postSiteStyleLoading" :style="{ marginLeft: '8px' }" />
          <a-tag class="playlist-style-tag" v-else :style="{ marginLeft: '8px' }">{{ value1 }}</a-tag>
        </h4>
      </div>
      <a-radio-group v-model:value="value1" @change="handleSiteStyleChange" size="small">
        <a-radio-button
          value="Light"
          :style="{
            position: 'relative',
            height: 'auto',
            padding: 0,
            border: 0,
            marginRight: '8px',
            overflow: 'hidden'
          }"
        >
          <img :style="{ display: 'block' }" :src="lightTheme" />
          <CheckOutlined v-if="value1 === 'Light'" :style="{ position: 'absolute', bottom: '6px', right: '6px' }" />
        </a-radio-button>
        <a-radio-button value="Dark" :style="{ height: 'auto', padding: 0, border: 0, overflow: 'hidden' }">
          <img :style="{ display: 'block' }" :src="darkTheme" />
          <CheckOutlined v-if="value1 === 'Dark'" :style="{ position: 'absolute', bottom: '6px', right: '6px' }" />
        </a-radio-button>
      </a-radio-group>
    </div>
    <div>
      <div :style="{ height: '23px', marginBottom: '10px' }">
        <h4>
          Random Color Setting
          <LoadingOutlined v-if="postColorLoading" :style="{ marginLeft: '8px' }" />
          <a-tag v-else :style="{ marginLeft: '8px' }" :color="value2">{{ value2 }}</a-tag>
        </h4>
      </div>
      <a-checkbox-group v-model:value="value2" @change="handleChange" size="small">
        <a-checkbox
          placement="bottom"
          v-for="color in checkboxes"
          :key="color"
          :style="`--checkbox-background-color: ${color}; --checkbox-border-color: ${
            color === '#f1f1f1' ? '#cfcfcf' : color
          }; margin-left: 0px; margin-right: 8px;`"
          :value="color"
          class="checkbox-color"
        />
      </a-checkbox-group>
    </div>
    <a-divider />
  </a-drawer>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue'
import { SettingOutlined, CheckOutlined, LoadingOutlined } from '@ant-design/icons-vue'
import { debounce } from 'lodash'
import { useStore } from 'vuex'
export default defineComponent({
  components: { SettingOutlined, CheckOutlined, LoadingOutlined },
  setup() {
    const store = useStore()
    const checkboxes = ref<string[]>([
      '#f1f1f1',
      '#f44336',
      '#e91e63',
      '#9c27b0',
      '#673ab7',
      '#3f51b5',
      '#2196f3',
      '#03a9f4',
      '#00bcd4',
      '#009688',
      '#4caf50',
      '#cddc39',
      '#ffeb3b',
      '#ffc107',
      '#ff9800',
      '#ff5722',
      '#795548',
      '#9e9e9e',
      '#607d8b'
    ])
    const visible = ref<boolean>(false)
    const value1 = ref<string>('Dark')
    const value2 = ref<string>(checkboxes.value[0])
    const postColorLoading = ref<boolean>(false)
    const postSiteStyleLoading = ref<boolean>(false)

    // eslint-disable-next-line
    const lightTheme = ref<{ image?: File }>(require('@/assets/svg/light-theme.svg'))
    // eslint-disable-next-line
    const darkTheme = ref<{ image?: File }>(require('@/assets/svg/dark-theme.svg'))

    const afterVisibleChange = (bool: boolean) => {
      console.log('visible', bool)
    }

    const showDrawer = async () => {
      //
      visible.value = true
    }

    const handleChange = async (e: any) => {
      try {
        value2.value = e[0]
        postColorLoading.value = true
        await changeTheme()
        setTimeout(() => {
          postColorLoading.value = false
        }, 1000)
      } catch (error) {
        console.log(error)
      }
    }

    watch(value2, (val) => {
      try {
        if (!val) {
          value2.value = checkboxes.value[0]
        }
      } catch (error) {
        console.log(error)
      }
    })

    const changeTheme = debounce(async () => {
      //
    }, 1000)

    const handleSiteStyleChange = async (e: any) => {
      postSiteStyleLoading.value = true
      store.dispatch('handleStyle', e.target.value)
      setTimeout(() => {
        postSiteStyleLoading.value = false
      }, 1000)
    }

    return {
      visible,
      afterVisibleChange,
      showDrawer,
      value1,
      value2,
      lightTheme,
      darkTheme,
      handleChange,
      checkboxes,
      postColorLoading,
      postSiteStyleLoading,
      handleSiteStyleChange
    }
  }
})
</script>

<style lang="scss">
.checkbox-color {
  .ant-checkbox-inner {
    background-color: var(--checkbox-background-color);
    border-color: var(--checkbox-border-color);
  }
}
</style>

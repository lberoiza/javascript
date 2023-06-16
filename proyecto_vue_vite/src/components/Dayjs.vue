<template>
  <time :dateTime="datetime.getTime().toString()">{{ computedFormat }}</time>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import Config from '../config/Config';
import * as dayjs from 'dayjs';
import 'dayjs/locale/es';
import 'dayjs/locale/en';
import 'dayjs/locale/de';
import relativeTime from 'dayjs/plugin/relativeTime';

interface TimeProps {
  locale?: string;
  format?: string;
  dateString: string;
}

const props = defineProps<TimeProps>()

dayjs.extend(relativeTime);


const locale = props.locale ?? Config.DEFAULT_LANGUAGE

const datetime = new Date(props.dateString);
const dayJsDate = dayjs(datetime).locale(locale);

const computedFormat = computed(() => {
  return props.format ? dayJsDate.format(props.format) : dayJsDate.fromNow()
});

</script>
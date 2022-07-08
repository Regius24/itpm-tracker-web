<template>
  <div class="table-bg-color p-1 rounded-sm shadow-xl">
    <DxDataGrid
      :show-borders="true"
      :allow-column-resizing="true"
      column-resizing-mode="widget"
      :column-min-width="50"
      :data-source="data"
      :columns="columns"
    >
      <DxPaging :page-size="10" />
      <DxPager
        :allowed-page-sizes="pageSizes"
        :show-page-size-selector="true"
        :show-navigation-buttons="true"
        :show-info="true"
      />
      <DxFilterRow
        :visible="true"
        apply-filter="auto"
      />
      <DxHeaderFilter :visible="true" />
      <DxSearchPanel
        :visible="true"
        :width="240"
        placeholder="Search..."
      />
    </DxDataGrid>
  </div>
</template>

<script setup>
import 'devextreme/dist/css/dx.dark.css'
import {
  DxDataGrid,
  DxPaging,
  DxPager,
  DxHeaderFilter,
  DxSearchPanel,
  DxFilterRow
} from 'devextreme-vue/data-grid';

defineProps(['data', 'columns'])

const pageSizes = [5, 10, 25, 'all']
</script>

<style scoped>
.table-bg-color {
  background-color: #2a2a2a;
}
</style>
import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router'
import { TableDemo } from './tabledemo';
import { TablePageDemo } from './tablepagedemo';
import { TableSortDemo } from './tablesortdemo';
import { TableFilterDemo } from './tablefilterdemo';
import { TableSelectionDemo } from './tableselectiondemo';
import { TableSectionsDemo } from './tablesectionsdemo';
import { TableStyleDemo } from './tablestyledemo';
import { TableLazyDemo } from './tablelazydemo';
import { TableExportDemo } from './tableexportdemo';
import { TableColGroupDemo } from './tablecolgroupdemo';
import { TableRowExpansionDemo } from './tablerowexpansiondemo';
import { TableScrollDemo } from './tablescrolldemo';
import { TableVirtualScrollDemo } from './tablevirtualscrolldemo';
import { TableColToggleDemo } from './tablecoltoggledemo';
import { TableCrudDemo } from './tablecruddemo';
import { TableResponsiveDemo } from './tableresponsivedemo';
import { TableContextMenuDemo } from './tablecontextmenudemo';
import { TableColResizeDemo } from './tablecolresizedemo';
import { TableReorderDemo } from './tablereorderdemo';
import { TableEditDemo } from './tableeditdemo';
import { TableRowGroupDemo } from './tablerowgroupdemo';
import { TableStateDemo } from './tablestatedemo';
import { TableStickyDemo } from './tablestickydemo';
import { TableBasicDemo } from './tablebasicdemo';
import { TableDynamicDemo } from './tabledynamicdemo';

@NgModule({
	imports: [
		RouterModule.forChild([
			{ path: '', component: TableDemo },
			{ path: 'page', component: TablePageDemo },
			{ path: 'basic', component: TableBasicDemo },
			{ path: 'dynamic', component: TableDynamicDemo },
			{ path: 'sort', component: TableSortDemo },
			{ path: 'selection', component: TableSelectionDemo },
			{ path: 'filter', component: TableFilterDemo },
			{ path: 'sections', component: TableSectionsDemo },
			{ path: 'style', component: TableStyleDemo },
			{ path: 'lazy', component: TableLazyDemo },
			{ path: 'export', component: TableExportDemo },
			{ path: 'colgroup', component: TableColGroupDemo },
			{ path: 'rowexpansion', component: TableRowExpansionDemo },
            { path: 'scroll', component: TableScrollDemo },
            { path: 'virtualscroll', component: TableVirtualScrollDemo },
			{ path: 'coltoggle', component: TableColToggleDemo },
			{ path: 'crud', component: TableCrudDemo },
			{ path: 'responsive', component: TableResponsiveDemo },
			{ path: 'contextmenu', component: TableContextMenuDemo },
			{ path: 'colresize', component: TableColResizeDemo },
			{ path: 'reorder', component: TableReorderDemo },
			{ path: 'edit', component: TableEditDemo },
            { path: 'rowgroup', component: TableRowGroupDemo },
            { path: 'state', component: TableStateDemo },
            { path: 'sticky', component: TableStickyDemo }
		])
	],
	exports: [
		RouterModule
	]
})
export class TableDemoRoutingModule {}

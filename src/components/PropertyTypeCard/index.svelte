<script lang="ts">
  import type { PropertyType } from "../../Types/Property"

	export let property: PropertyType;
	export let selectedPropertyType: String;
	export let setSelectedProperty: (property: PropertyType) => void;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  on:click={() => (setSelectedProperty(property))}
	class="border-1 pointer text-xl font-semibold w-[180px] h-[80px] border rounded flex flex-row items-center justify-center gap-3 property-type-hover {property.type ===
		selectedPropertyType && 'property-type-active'}"
>
	<i class={property.icon + ' bg-tranparent'} />
	<div class="bg-transparent">
		<span class="bg-transparent">{property.type}</span>
	</div>
</div>

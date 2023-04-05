<script lang="ts">
	import { onMount } from 'svelte';
	import { api } from '../../services/api';

	interface IfetchOrderDetails{
		orderId: number
	}

	type orderDetail = {
		image: string;
		price: string;
	}

	export async function fetchOrderDetails (props:IfetchOrderDetails) {
	const { orderId } = props
	const response = await api.get(`/order_details/${orderId}`)
	return response.data;
}

	let orderDetail: orderDetail;
	let orderId = 1

	onMount(async () => {
		orderDetail = await fetchOrderDetails({orderId});
	});
</script>


<svelte:head>
	<title>Page Two</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div>
	{#if orderDetail}
	<h1>Order {orderId} Details</h1>
	<ul>
		{JSON.stringify(orderDetail, null, 2)}
	</ul>
{:else}
	<p>Carregando...</p>
{/if}

</div>

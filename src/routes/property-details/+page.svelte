<script lang="ts">
	import Image from '../../assets/image.png';
	import Bath from '../../assets/icons/bath.svg';
	import Bed from '../../assets/icons/beds.svg';
	import Calendar from '../../assets/icons/calendar.svg';
	import Money from '../../assets/icons/money.svg';
	import Arrow from '../../assets/icons/arrow.svg';
	import Person from '../../assets/icons/person.svg';
	import PropertyTypeCard from '../../components/PropertyTypeCard/index.svelte';
	import type { PropertyType } from '../../Types/Property';

	const propertiesType: PropertyType[] = [
		{
			type: 'Single-Family',
			icon: 'fas fa-home bg-transparent'
		},
		{
			type: 'Multi-Family',
			icon: 'far fa-building bg-transparent'
		},
		{
			type: 'Townhome',
			icon: 'fas fa-home bg-transparent'
		},
		{
			type: 'Condo',
			icon: 'far fa-building bg-transparent'
		}
	];
	let selectedPropertyType = '';

	const setSelectedProperty = (property: PropertyType) => {
		selectedPropertyType = property.type;
	};
</script>

<svelte:head>
	<title>Property details</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="w-[850px] mx-auto mt-2 xl:mt-8 md:text-xl">
	<form class="py-4">
		<div class="flex gap-12">
			<div class="md:max-w-lg md:mx-auto">
				<div>
					<h2 class="text-3xl text-purple-500">Property details</h2>
					<p class="mt-2 text-justify text-purple-500">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
					</p>
				</div>
				<div class="mt-8 flex flex-col gap-2">
					<div class="form-field max-w-md">
						<label for="nameInput" class="label-field"> Property Name </label>
						<input type="text" id="nameInput" name="nameInput" class="input-field" />
					</div>
					<div class="form-field max-w-md">
						<label for="address" class="label-field"> Address </label>
						<input
							type="text"
							id="address"
							name="address"
							placeholder="21 Jump Street, Los Angeles, California"
							class="input-field"
						/>
					</div>
				</div>
			</div>
			<img class="object-contain md:hidden" src={Image} alt="colorful house" />
		</div>
		<div class="mt-8 form-section">
			<span class="font-semibold tracking-wide"> Property Type </span>
			<div class="mt-2 grid grid-cols-4 md:grid-cols-2 md:gap-4 gap-8">
				{#each propertiesType as property}
					<PropertyTypeCard {setSelectedProperty} {property} {selectedPropertyType} />
				{/each}
			</div>
		</div>
		<div class="mt-8 form-section">
			<span class="font-semibold tracking-wide"> Unit info </span>
			<div class="mt-2 px-5 py-4 grid grid-rows-2 gap-4 border shadow-lg md:max-w-md">
				<div class="grid grid-cols-4 md:grid-cols-2 md:gap-4 md:max-w-md gap-8">
					<div class="form-field">
						<label for="unitName" class="label-field"> Unit Name </label>
						<input
							type="text"
							id="unitName"
							name="unitName"
							placeholder="Name and/or number"
							class="input-field px-2"
						/>
					</div>
					<div class="form-field relative">
						<label for="rent" class="label-field"> Rent </label>
						<img src={Money} class="absolute top-11 md:top-[52px] left-1 z-50" alt="" />
						<span class="absolute top-11 md:top-[48px] left-32 z-50 text-purple">/mo</span>
						<input type="number" min="0" id="rent" name="rent" class="input-field pl-6 pr-14" />
					</div>
					<div class="form-field relative">
						<label for="deposit" class="label-field"> Deposit </label>
						<img src={Money} class="absolute top-11 md:top-[52px] left-1 z-50" alt="" />
						<span class="absolute top-11 md:top-[48px] left-32 z-50 text-purple">/mo</span>
						<input
							type="number"
							min="0"
							id="deposit"
							name="deposit"
							class="input-field pl-6 pr-14"
						/>
					</div>
					<div class="form-field">
						<label for="lease" class="label-field"> Lease Length</label>
						<input
							placeholder="12"
							min="0"
							type="number"
							id="lease"
							name="lease"
							class="input-field"
						/>
					</div>
				</div>
				<div class="grid grid-cols-5 md:grid-cols-2 md:gap-4 md:max-w-md gap-8">
					<div class="form-field relative">
						<label for="beds" class="label-field"> Beds </label>
						<img src={Bed} class="absolute top-11 md:top-[50px] left-2 z-50" alt="" />
						<img
							src={Arrow}
							alt=""
							class="absolute top-[52px] md:top-[56px] left-28 md:left-[10rem] z-50"
						/>
						<select id="beds" name="beds" class="input-field pl-10">
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
						</select>
					</div>
					<div class="form-field relative">
						<label for="baths" class="label-field"> Baths </label>
						<img src={Bath} class="absolute top-11 md:top-[52px] left-2 z-50" alt="" />
						<img
							src={Arrow}
							alt=""
							class="absolute top-[52px] md:top-[56px] left-28 md:left-[10rem] z-50"
						/>
						<select id="baths" name="baths" class="input-field pl-10">
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
						</select>
					</div>
					<div class="form-field">
						<label for="sqFt" class="label-field"> Sq.Ft. </label>
						<input
							placeholder="12"
							type="number"
							min="0"
							id="sqFt"
							name="sqFt"
							class="input-field"
						/>
					</div>
					<div class="form-field relative">
						<label for="available" class="label-field"> Available on </label>
						<img src={Calendar} class="absolute top-11 md:top-[50px] left-2 z-50" alt="" />
						<input
							value="2021-04-11"
							type="date"
							id="available"
							name="available"
							class="input-field text-sm md:text-base pl-10"
						/>
					</div>
					<div class="form-field relative">
						<label for="vacancy" class="label-field"> Vacancy </label>
						<img src={Person} class="absolute top-11 md:top-[52px] left-2 z-50" alt="" />
						<img
							src={Arrow}
							alt=""
							class="absolute top-[52px] md:top-[56px] left-28 md:left-[10rem] z-50"
						/>
						<select id="vacancy" name="vacancy" class="input-field pl-10">
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
						</select>
					</div>
				</div>
			</div>
		</div>
		<div class="mt-[2rem] form-section flex flex-row justify-between items-center">
			<button class="btn-primary border-black hover:bg-gray-300"> back </button>
			<button
				type="submit"
				class="btn-primary bg-primary-500 text-white hover:bg-indigo-600 md:mr-12"
			>
				continue
			</button>
		</div>
	</form>
</div>

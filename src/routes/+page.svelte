<script lang="ts">
	import Image from '../assets/image.png';
	import Bath from '../assets/icons/bath.svg';
	import Bed from '../assets/icons/beds.svg';
	import Calendar from '../assets/icons/calendar.svg';
	import Money from '../assets/icons/money.svg';
	import Person from '../assets/icons/person.svg';
	import PropertyTypeCard from '../components/PropertyTypeCard/index.svelte';
  import type { PropertyType } from "../Types/Property"

	const propertiesType: PropertyType[] = [
		{
			type: "Single-Family",
			icon: "fas fa-home bg-transparent",
		},
		{
			type: "Multi-Family",
			icon: "far fa-building bg-transparent",
		},
		{
			type: "Townhome",
			icon: "fas fa-home bg-transparent",
		},
		{
			type: "Condo",
			icon: "far fa-building bg-transparent",
		}
	]
	let selectedPropertyType = ""

	const setSelectedProperty = (property: PropertyType) => {
		selectedPropertyType = property.type
	}

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
					<h2 class="text-3xl">Property details</h2>
					<p class="mt-2 text-justify">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
					</p>
				</div>
				<div class="mt-8 flex flex-col gap-2">
					<div class="form-field max-w-md">
						<label for="nameInput" class="mb-2 font-semibold tracking-wide"> Property Name </label>
						<input
							type="text"
							id="nameInput"
							name="nameInput"
							class="input-field"
						/>
					</div>
					<div class="form-field max-w-md">
						<label for="address" class="mb-2 font-semibold tracking-wide"> Address </label>
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
				<PropertyTypeCard setSelectedProperty={setSelectedProperty} property={property} selectedPropertyType={selectedPropertyType} />
				{/each}
			</div>
		</div>
		<div class="mt-8 form-section">
			<span class="font-semibold tracking-wide"> Unit info </span>
			<div class="mt-2 px-5 py-4 grid grid-rows-2 gap-4 border shadow-lg md:max-w-md">
				<div class="grid grid-cols-4 md:grid-cols-2 md:gap-4 md:max-w-md gap-8">
					<div class="form-field">
						<label for="unitName" class="mb-2 font-semibold tracking-wide"> Unit Name </label>
						<input
							type="text"
							id="unitName"
							name="unitName"
							placeholder="Name and/or number"
							class="input-field"
						/>
					</div>
					<div class="form-field relative">
						<label for="rent" class="mb-2 font-semibold tracking-wide"> Rent </label>
							<img src={Money} class="absolute top-11 left-1 z-50" alt="">
							<span class="absolute top-11 left-32 z-50">/mo</span>
							<input type="number" min="0" id="rent" name="rent" class="input-field pl-6 pr-14" />
					</div>
					<div class="form-field relative">
						<label for="deposit" class="mb-2 font-semibold tracking-wide"> Deposit </label>
							<img src={Money} class="absolute top-11 left-1 z-50" alt="">
							<span class="absolute top-11 left-32 z-50">/mo</span>
							<input type="number" min="0" id="deposit" name="deposit" class="input-field pl-6 pr-14" />
					</div>
					<div class="form-field">
						<label for="lease" class="mb-2 font-semibold tracking-wide"> Lease Length </label>
						<input placeholder="12" type="number" id="lease" name="lease" class="input-field" />
					</div>
				</div>
				<div class="grid grid-cols-5 md:grid-cols-2 md:gap-4 md:max-w-md gap-8">
					<div class="form-field relative">
						<label for="beds" class="mb-2 font-semibold tracking-wide"> Beds </label>
							<img src={Bed} class="absolute top-11 left-2 z-50" alt="">
							<select id="beds" name="beds" class="input-field pl-10">
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
						</select>
					</div>
					<div class="form-field relative">
						<label for="baths" class="mb-2 font-semibold tracking-wide"> Baths </label>
							<img src={Bath} class="absolute top-11 left-2 z-50" alt="">
							<select id="baths" name="baths" class="input-field pl-10">
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
						</select>
					</div>
					<div class="form-field">
						<label for="sqFt" class="mb-2 font-semibold tracking-wide"> Sq.Ft. </label>
						<input
							placeholder="12"
							type="number"
							min="0"
							id="sqFt"
							name="sqFt"
							class="input-field"
						/>
					</div>
					<div class="form-field">
						<label for="available" class="mb-2 font-semibold tracking-wide"> Available on </label>
						<input
							type="date"
							id="available"
							name="available"
							class="input-field"
						/>
					</div>
					<div class="form-field relative">
						<label for="vacancy" class="mb-2 font-semibold tracking-wide"> Vacancy </label>
							<img src={Person} class="absolute top-11 left-2 z-50" alt="">
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
			<button
			class="btn-primary border-black hover:bg-gray-300"
			>
				back
			</button>
			<button
				type="submit"
				class="btn-primary bg-primary-500 text-white hover:bg-indigo-600 md:mr-12"
				>
				continue
			</button>
		</div>
	</form>
</div>

<script>
	import Image from '../assets/image.png';
</script>

<svelte:head>
	<title>Property details</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="w-[800px] mx-auto mt-2 xl:mt-8 md:text-xl">
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
					<div class="flex flex-col max-w-md">
						<label for="nameInput" class="mb-2 font-semibold tracking-wide"> Property Name </label>
						<input
							type="text"
							id="nameInput"
							name="nameInput"
							class="border border-gray-400 rounded p-2"
						/>
					</div>
					<div class="flex flex-col max-w-md">
						<label for="address" class="mb-2 font-semibold tracking-wide"> Address </label>
						<input
							type="text"
							id="address"
							name="address"
							placeholder="21 Jump Street, Los Angeles, California"
							class="border border-gray-400 rounded p-2"
						/>
					</div>
				</div>
			</div>
			<img class="object-contain md:hidden" src={Image} alt="colorful house" />
		</div>
		<div class="mt-8 md:max-w-lg md:mx-auto">
			<span class="font-semibold tracking-wide"> Property Type </span>
			<div class="mt-2 grid grid-cols-4 md:grid-cols-2 md:gap-4 gap-8">
				<div
					class="text-xl pointer font-semibold w-[180px] h-[80px] border rounded border-1 flex flex-row items-center justify-center gap-3 hover:text-indigo-500 hover:bg-[#F3F1FE] hover:border-indigo-500 hover:border-2"
				>
					<i class="fas fa-home bg-transparent" />
					<div class="bg-transparent">
						<span class="bg-transparent">Single-Family</span>
					</div>
				</div>
				<div
					class="text-xl pointer font-semibold w-[180px] h-[80px] border rounded border-1 flex flex-row items-center justify-center gap-3 hover:text-indigo-500 hover:bg-[#F3F1FE] hover:border-indigo-500 hover:border-2"
				>
					<i class="far fa-building bg-transparent" />
					<div class="bg-transparent">
						<span class="bg-transparent">Multi-Family</span>
					</div>
				</div>
				<div
					class="text-xl pointer font-semibold w-[180px] h-[80px] border rounded border-1 flex flex-row items-center justify-center gap-3 hover:text-indigo-500 hover:bg-[#F3F1FE] hover:border-indigo-500 hover:border-2"
				>
					<i class="fas fa-home bg-transparent" />
					<div class="bg-transparent">
						<span class="bg-transparent">Townhome</span>
					</div>
				</div>
				<div
					class="text-xl pointer font-semibold w-[180px] h-[80px] border rounded border-1 flex flex-row items-center justify-center gap-3 hover:text-indigo-500 hover:bg-[#F3F1FE] hover:border-indigo-500 hover:border-2"
				>
					<i class="far fa-building bg-transparent" />
					<div class="bg-transparent">
						<span class="bg-transparent">Condo</span>
					</div>
				</div>
			</div>
		</div>
		<div class="mt-8 md:max-w-lg md:mx-auto">
			<span class="font-semibold tracking-wide"> Unit info </span>
			<div class="mt-2 px-5 py-4 grid grid-rows-2 gap-4 border shadow-lg md:max-w-md">
				<div class="grid grid-cols-4 md:grid-cols-2 md:gap-4 md:max-w-md gap-8">
					<div class="flex flex-col">
						<label for="unitName" class="mb-2 font-semibold tracking-wide"> Unit Name </label>
						<input
							type="text"
							id="unitName"
							name="unitName"
							placeholder="Name and/or number"
							class="border border-gray-400 rounded p-2"
						/>
					</div>
					<div class="flex flex-col">
						<label for="rent" class="mb-2 font-semibold tracking-wide"> Rent </label>
						<input type="text" id="rent" name="rent" class="border border-gray-400 rounded p-2" />
					</div>
					<div class="flex flex-col">
						<label for="deposit" class="mb-2 font-semibold tracking-wide"> Deposit </label>
						<input
							type="text"
							id="deposit"
							name="deposit"
							class="border border-gray-400 rounded p-2"
						/>
					</div>
					<div class="flex flex-col">
						<label for="lease" class="mb-2 font-semibold tracking-wide"> Lease Length </label>
						<input type="text" id="lease" name="lease" class="border border-gray-400 rounded p-2" />
					</div>
				</div>
				<div class="grid grid-cols-5 md:grid-cols-2 md:gap-4 md:max-w-md gap-8">
					<div class="flex flex-col">
						<label for="beds" class="mb-2 font-semibold tracking-wide">Beds</label>
						<select id="beds" name="beds" class="form-select border border-gray-400 rounded p-2">
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
						</select>
					</div>
					<div class="flex flex-col">
						<label for="baths" class="mb-2 font-semibold tracking-wide">Baths</label>
						<select id="baths" name="baths" class="border border-gray-400 rounded p-2">
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
						</select>
					</div>
					<div class="flex flex-col">
						<label for="sqFt" class="mb-2 font-semibold tracking-wide"> Sq.Ft. </label>
						<input
							placeholder="12"
							type="number"
							min="0"
							id="sqFt"
							name="sqFt"
							class="border border-gray-400 rounded p-2"
						/>
					</div>
					<div class="flex flex-col">
						<label for="available" class="mb-2 font-semibold tracking-wide"> Available on </label>
						<input
							type="date"
							id="available"
							name="available"
							class="border border-gray-400 rounded p-2"
						/>
					</div>
					<div class="flex flex-col">
						<label for="vacancy" class="mb-2 font-semibold tracking-wide">Vacancy</label>
						<select id="vacancy" name="vacancy" class="border border-gray-400 rounded p-2">
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
						</select>
					</div>
				</div>
			</div>
		</div>
		<div class="mt-[4rem] md:max-w-lg md:mx-auto flex flex-row justify-between items-center">
			<button
			class="rounded-full p-2 w-[140px] uppercase border border-black font-medium hover:bg-gray-200 motion-safe:transition"
			>
				back
			</button>
			<button
				type="submit"
				class="rounded-full p-2 w-[140px] uppercase border border-1 bg-indigo-500 text-white font-medium hover:bg-indigo-600 motion-safe:transition md:mr-12"
				>
				continue
			</button>
		</div>
	</form>
</div>

<script lang="ts">
     export let checked: boolean = false
</script>

<label for="check" class="bg-marine w-12 h-6 rounded-full inline-block relative cursor-pointer">
    <input bind:checked={checked} type="checkbox" id="check" class="sr-only peer">
    <span class="w-4 h-4 bg-white absolute top-1 left-1 rounded-full peer-checked:left-7 transition-all duration-500"></span>
</label>
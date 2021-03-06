<template>
<div class='form-guide'>
  <div class='england-form-guide' id='englandFormGuide'>
    <p class='scores' id='scores'></p>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
      guide: [{
        result: 'won',
        match: 'England 2-1 Belgium',
      },
      {
        result: 'lost',
        match: 'England 0-1 Denmark',
      },
      {
        result: 'won',
        match: 'England 3-0 Republic of Ireland',
      },
      {
        result: 'lost',
        match: 'Belgium 2-0 England',
      },
      {
        result: 'won',
        match: 'England 4-0 Iceland',
      },
      ],
    };
  },
  method: {
    text() {
      for (let i = 0; i < this.guide.length; i += 1) {
        this.text += this.guide[i].match + '<br>';

        if (this.guide[i].result == 'won') {
          this.text += '<span class="colour-green"><span class="green-circle">W</span>' + this.guide[i].match + '</span><br>';
        } else if (this.guide[i].result == 'lost') {
          this.text += '<span class="colour-red"><span class="red-circle">L</span>' + this.guide[i].match + '</span><br>';
        }
      }
    }
  },
};
</script>

<style scoped>

</style>

<template>
    <div id="sm__select">
        <table id="select-element">
            <tr>
                <th>Wert</th>
                <th>Preis</th>
            </tr>
            <SelectElement v-for="n in range"></SelectElement>
        </table>
        <button id="addRow" v-on:click="addForm()">Neue Option</button>
    </div>
</template>

<script>
    import SelectElement from '../datatypes/SelectElement'
    import JQuery from 'jquery'
    let $ = JQuery;

    export default {
        components: {
            SelectElement
        },
        props: ['products'],
        data () {
          return {
              range:1,
          }
        },
      methods: {
          addForm: function() {
              this.range += 1;
              $('#select-element').find('tr').each(function(i, el) {

                  console.log("sasa"+$(el).attr('id'));
              });

              $("#select-element tr").each(function () {
                  var textval = $(this).find("td").eq(1).find(":text").val();
                  var ddlval = $(this).find("td").eq(2).find("select option:selected").text();

                  alert("TextBox text is " + textval + "; DropDown selected value is " + ddlval);
              })
          }
      }
  }

</script>

<style>

</style>

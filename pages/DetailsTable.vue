<template>
  <div class="container">
    <div>
      <h2>Details</h2>
      <DataTable :value="usersList">
        <Column field="id" header="Id" />
        <Column field="name" header="Name" />
        <Column field="age" header="Age" />
        <Column header="Delete">
          <template #body="slotProps">
            <Button
              icon="pi pi-times"
              class="p-button-rounded p-button-danger"
              @click="deleteItem(slotProps.data.id)"
            />
          </template>
        </Column>
      </DataTable>
    </div>
    <div class="add-data">
      <h5>Enter Id</h5>
      <span class="p-float-label">
        <InputText id="userId" v-model="newUser.id" type="number" min="1" />
        <small id="username2-help" class="p-invalid">{{ isIdValid }}</small>
      </span>
      <h5>Enter Name</h5>
      <span class="p-float-label">
        <InputText id="userName" v-model="newUser.name" type="text" />
      </span>
      <h5>Enter Age</h5>
      <span class="p-float-label">
        <InputText id="userAge" v-model="newUser.age" type="number" min="0" />
      </span>
      <Button
        icon="pi pi-plus"
        class="add-button"
        label="Add"
        :disabled="disabled"
        @click="addUser()"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
@Component
export default class DetailsComponent extends Vue {
  usersList = [
    {
      id: 1,
      name: 'ABC',
      age: 23
    }
  ];

  newUser = {
    name: '',
    age: 0,
    id: 0
  };

  disabled = true;
  // computed: {
  get isIdValid () {
    if (this.usersList.some(user => user.id === this.newUser.id * 1)) {
      this.disabled = true
      return 'Id already exists'
    } else if (this.newUser.id && this.newUser.name && this.newUser.age) {
      this.disabled = false
    }
    return ''
  }

  // }
  // methods: {
  addUser () {
    this.usersList.push(this.newUser)
    this.usersList.sort((elementA, elementB) => elementA.id - elementB.id)
    this.newUser = {
      name: '',
      age: 0,
      id: 0
    }
    this.disabled = true
  }

  deleteItem (data: number) {
    this.usersList = this.usersList.filter(user => user.id !== data)
  }
  // },
}
</script>

<style scoped>
.container {
  top: 60px;
  margin: 0 auto;
  min-height: 100vh;
  padding: 20px;
  left: 200px;
  position: fixed;
}

.add-data {
  padding: 30px;
}

.p-float-label {
  padding: 8px 0;
}

.p-float-label > input {
  width: 100%;
}

.add-button {
  float: right;
}
</style>

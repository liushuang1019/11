<template>
  <div class="home">
      <div class="nav">
          <span v-for='(item,index) in list' :key='index'
           @click='savenum(index)'
          >{{item.nav}}</span>
          <div class="inp">
              <input type="text" v-model='text' ><span @click="finddata(text)">搜索</span>
          </div>
      </div>
      <div class="main">
     <dl class="home-item" v-for='(item,index) in list[index].data' :key='index'>
         <dd class="home-left">
             <!-- 组件的循环渲染， -->
             <div v-if='item.type==1'>
                 <Icon><icon type='pending'>进行中</icon></Icon>
             </div>
               <div v-if='item.type==2'>
                 <icon type='reject'>强制进行</icon>
             </div>
             <div v-if='item.type==3'>
                <icon type='fullfilled'>已完成</icon>
             </div>
         </dd>
         <dt class="home-right">
             <div class='right-tit'>{{item.tit}}</div>
             <div><p></p> <p>执行人：{{item.name}}</p></div>
         </dt>
         <dd>
             <!-- 将日常工作，专项工作， 临时工作封装成组件来实现复用 -->
             <div v-if='item.type==1'>
                 <span>日常工作</span>
             </div>
               <div v-if='item.type==2'>
                 <span>专项工作</span>
             </div>
             <div v-if='item.type==3'>
                <span>临时工作</span>
             </div>
         </dd>
     </dl>
     </div>
  </div>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex';
import Icon from '../../components/Icon/Icon.vue';
import right from '../../components/right/right.vue'
export default {
  data(){
      return {
         text:''
      }
  },
  created(){
      this.getdata()
  }
  ,
  methods:{
    // 通过vuex来实现异步数据管理
      ...mapActions(['getdata']),
      ...mapMutations(['savenum','finddata'])
  },
  computed:{
      ...mapState(['list','index'])
  }
}
</script>

<style>
  .home{
      width: 800px;
      height: 500px;
      display: flex;
      flex-direction: column;
      margin-left: 50px;
      margin-top: 20px;
      background: #eee;
  }
  .home .nav{
      width: 100%;
      height: 30px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
  }
  .inp{
      width: 200px;
      height: 30px;
      display: flex;
      justify-content: flex-start;
  }
  input{
      border:0;outline: 0;
      margin-top: 5px;
      height: 25px;
  }
  .home .nav span{
       display: flex;
      justify-content: space-around;
      align-items: center;
      width: 150px;
      height: 30px;
      border: 1px solid #eee;
  }
  .home-left{
      width: 80px;
      height: 100%;
  }
  .home-item{
      width: 100%;
      height: 100px;
      display: flex;
      justify-content: flex-start;
  }
   .home-item .left{
       margin-right: 20px;
   }
   .home-item .right{
       width: 100%;
       display: flex;
   }
   .right-tit{
       width: 100%;
       height: 30px;
       background: rgba(0, 0, 0, 0.4)
   }
</style>
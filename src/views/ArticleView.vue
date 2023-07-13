<script setup lang="ts">
import { ref } from "vue";

import iconHeart from "@/components/icons/iconHeart.vue";
import iconComment from "../components/icons/iconComment.vue";
import iconBookmark from "@/components/icons/iconBookmark.vue";
import iconTime from "@/components/icons/iconTime.vue";
import iconRepost from "@/components/icons/iconRepost.vue";

const items = [
	{
		color:'#1D9B22'
	},
	{
		color:'#3159A6'
	},
	{
		color:'#A63131'
	},
	{
		color:'#6D15A3'
	},
	{
		color:'#4B73DB'
	},
	{
		color:'#B148AC'
	},
]

</script>

<template>
  <section class="article-view">
    <h1>статьи</h1>
    <div class="article-view__type">
      <div>Все</div>
      <div>Популярные</div>
    </div>
    <div class="article-view__container">
      <div class="article-view__card card" v-for="item in 3">
        <div class="card__header">
          <div class="card__header--fio">
            <div class="card__header--img">
              <img src="@/assets/img/lady.png" alt="" />
            </div>
            <p>Александрия Святославовна Романова</p>
          </div>
          <div class="card__header--date">21.03.2023</div>
        </div>
        <div class="card__reactions">
          <div>
            <icon-heart />
            123
          </div>
          <div>
            <icon-comment />
            24
          </div>
          <div>
            <icon-repost />
            8
          </div>
          <div>
            <icon-bookmark />
          </div>
        </div>
        <div class="card__images">
          <div class="card__image" v-for="item in 4">
            <img class="image" src="/src/assets/img/FotoGray.png" alt="" />
          </div>
        </div>
        <div class="card__body">
          <div class="card__expert--reactions">
            <div class="card__expert--avatars">
							<div v-for="(item, idx) in items" :key="idx" :style="`transform: translate(-${idx*15}px,0); background: ${item.color}`">
								
							</div>
						</div>
            <div>6 экспертов согласны</div>
            <div>
              <icon-time />
              5 минут
            </div>
          </div>
          <div class="card__body-text">
            <p>Банкротство</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua...............
            </p>
          </div>
          <div class="card__body-tags">
            <p>банкротство</p>
            <p>банк</p>
            <p>пенсия</p>
            <p>наследство</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "/src/assets/styles/articleStyle.scss";
</style>

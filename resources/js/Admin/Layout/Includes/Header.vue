<template>
    <header class="header">
        <div class="route">
            <router-link :to="{name:'Dashboard'}" >Dashboard</router-link>
            <router-link :to="{name:'AboutUs'}">About Us</router-link>
            <router-link :to="{name:'ContactUs'}">Contact Us</router-link>
        </div>
        <ul>
            <li>
                <div class="user outsideClick">
                    <img class="user-image" src="/images/header/user.jpg" alt="" @click="ToggleUserDropdown($event)">
                    <div class="user-dropdown outsideClick">
                        <div class="dropdown-header" style="background-image: url(/images/header/bg1.jpg)">
                                <span class="overlay">
                                    A.H <br>
                                    Swccho
                                </span>
                            <div class="user-img">
                                <img src="/images/header/user.jpg" alt="">
                            </div>
                        </div>
                        <div class="dropdown-body">
                            <a  href="javascript:void(0)" >Profile</a>
                            <a href="javascript:void(0)">Change Password</a>
                            <a  href="javascript:void(0)" >Settings</a>
                            <a href="javascript:void(0)" >Logout</a>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </header>
</template>
<script>
import $ from 'jquery'
export default {
    data() {
        return {
        }
    },
    computed: { },
    methods: {
        ToggleUserDropdown(e){
            let trigger = $(e.target).closest('.user').find('.user-dropdown')
            if(trigger.hasClass('active')){
                trigger.removeClass('active')
            }else{
                trigger.addClass('active')
            }
        },
        closeDropdown(){
            $('.user-dropdown').removeClass('active')
        }
    },
    created() {
        $(document).mouseup(function (e) {
            const container = $('.outsideClick');
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                container.removeClass('active');
            }
        });
    },
    mounted() {

    }
}
</script>

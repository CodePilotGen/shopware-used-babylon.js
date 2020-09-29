<template>
<!--<mdb-col>


  <mdb-side-nav breakWidth="770" logo="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" sideNavClass="" mask="strong"  fixed waves>
    <ul>
      <li>
        <ul class="social">
          <li><a href="#" class="icons-sm fb-ic"><mdb-icon fab icon="facebook" /></a></li>
        </ul>
      </li>
      <li>
        <mdb-side-nav-nav>
          <mdb-side-nav-item header icon="home" v-on:click.native="openModalHome" router to="/">Home</mdb-side-nav-item>

          <mdb-side-nav-cat icon="users-cog" name="Account" >
            <mdb-side-nav-item icon="user" router to="/profil">Profil</mdb-side-nav-item>
            <mdb-side-nav-item icon="file-invoice-dollar" router to="/rechnungen">Rechnungen</mdb-side-nav-item>
          </mdb-side-nav-cat>

          <mdb-side-nav-cat icon="cogs" name="Einstellungen" >
            <mdb-side-nav-item icon="globe" router to="/domains">Domains</mdb-side-nav-item>
            <mdb-side-nav-item icon="plug" router to="/plugins">Plugins</mdb-side-nav-item>
          </mdb-side-nav-cat>

          <mdb-side-nav-item header icon="envelope" router to="/kontakt">Kontakt</mdb-side-nav-item>

        </mdb-side-nav-nav>
      </li>
    </ul>
  </mdb-side-nav>
</mdb-col>-->


    <mdb-navbar>
      <mdb-navbar-nav nav vertical class="font-weight-bold">
        <mdb-nav-item header icon="home" anchorClass="dark-grey-text" exact router to="components">Komponenten</mdb-nav-item>
        <mdb-dropdown tag="li" class="nav-item">
          <mdb-dropdown-toggle tag="a" navLink  slot="toggle" waves-fixed>Account</mdb-dropdown-toggle>
          <mdb-dropdown-menu>
            <router-link class="dropdown-item" to="profil">Profil</router-link>
            <router-link class="dropdown-item" to="rechnungen">Rechnungen</router-link>
          </mdb-dropdown-menu>
        </mdb-dropdown>

        <mdb-dropdown tag="li" class="nav-item">
          <mdb-dropdown-toggle tag="a" navLink  slot="toggle" waves-fixed>Einstellungen</mdb-dropdown-toggle>
          <mdb-dropdown-menu>
            <mdb-dropdown-item>Domains</mdb-dropdown-item>
            <mdb-dropdown-item>Plugins</mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
        <mdb-nav-item href="#" anchorClass="dark-grey-text">Kontakt</mdb-nav-item>
      </mdb-navbar-nav>
    </mdb-navbar>


</template>
<script>
  import { mdbBtn, mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbTooltip, Popover, mdbInput, mdbTextarea, mdbContainer, mdbRow, mdbCol, mdbIcon, mdbCardGroup, mdbCardImage,
    mdbCardTitle, mdbCardBody, mdbCardText, mdbCard, mdbView, mdbDatatable,mdbSideNav, mdbSideNavNav, mdbSideNavCat, mdbSideNavItem, mdbMask, mdbNavItem, mdbNavbarNav, mdbNavbar, mdbDropdown, mdbDropdownMenu, mdbDropdownToggle, mdbDropdownItem, mdbFormInline} from 'mdbvue';

  export default {
    components: {
      mdbBtn,
      mdbModal,
      mdbModalHeader,
      mdbModalTitle,
      mdbModalBody,
      mdbModalFooter,
      mdbTooltip,
      Popover,
      mdbInput,
      mdbTextarea,
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbIcon, mdbCardGroup, mdbCardImage,
      mdbCardTitle, mdbCardBody, mdbCardText, mdbCard, mdbView, mdbDatatable,mdbSideNav, mdbSideNavNav, mdbSideNavCat, mdbSideNavItem, mdbMask,mdbNavItem,mdbNavbarNav,mdbNavbar, mdbDropdown, mdbDropdownMenu, mdbDropdownToggle, mdbDropdownItem, mdbFormInline
    },
    name: 'Navigation',
    methods:{

    }

  };
</script>


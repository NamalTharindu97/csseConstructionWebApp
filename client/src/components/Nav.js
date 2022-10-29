import React, { Component } from 'react'

export default class Nav extends Component {
  render() {
    return (
      <div>
      
      <div class="pos-f-t">
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-dark p-4">
      <a href='/'  style={{textDecoration : 'none'}}>   <h4 class="text-white">Home</h4>  </a>
      {/* <span class="text-muted">Toggleable via the navbar brand.</span> */}
    </div>
  </div>
  <nav class="navbar navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>
</div>
      
      </div>
    )
  }
}

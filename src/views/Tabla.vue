<template>
 <div class="Noticias">
  <div>
  <b-navbar toggleable="lg" type="dark" class="Fondo">
    <b-navbar-brand href="#">FUT365</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/Noticias">Noticias</b-nav-item>
        <b-nav-item href="/Equipos">Equipos</b-nav-item>
        <b-nav-item href="/Calendario">Calendario</b-nav-item>
        <b-nav-item href="/Resultados">Resultados</b-nav-item>
        <b-nav-item href="/Tabla">Posiciones</b-nav-item>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
    </b-collapse>
  </b-navbar>
</div>
<div class="container">
        <h2>Tabla de Posiciones</h2>            
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>N°</th>
        <th>EQUIPOS</th>
        <th>PJ</th>
        <th>PG</th>
        <th>PE</th>
        <th>PP</th>
        <th>GF</th>
        <th>GC</th>
        <th class="rojo">PT</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td> FC Tiburones</td>
        <td>13</td>
        <td>13</td>
        <td>0</td>
        <td>0</td>
        <td>49</td>
        <td>11</td>
        <td class="rojo">39</td>
      </tr>
        <tr>
        <td>2</td>
        <td>CD Morelia</td>
        <td>13</td>
        <td>9</td>
        <td>2</td>
        <td>2</td>
        <td>36</td>
        <td>23</td>
        <td class="rojo">29</td>
      </tr> 
      <tr>
        <td>3</td>
        <td>Imdepor</td>
        <td>13</td>
        <td>9</td>
        <td>1</td>
        <td>3</td>
        <td>43</td>
        <td>16</td>
        <td class="rojo">28</td>
      </tr> 
            <tr>
        <td>4</td>
        <td>CD Kubala</td>
        <td>13</td>
        <td>4</td>
        <td>2</td>
        <td>7</td>
        <td>24</td>
        <td>31</td>
        <td class="rojo">14</td>
      </tr> 
        <tr>
        <td>5</td>
        <td>AT. San Isidro</td>
        <td>13</td>
        <td>4</td>
        <td>2</td>
        <td>7</td>
        <td>27</td>
        <td>37</td>
        <td class="rojo">14</td>
      </tr>   
        <tr>
        <td>6</td>
        <td>AF Orange Lions</td>
        <td>13</td>
        <td>1</td>
        <td>6</td>
        <td>6</td>
        <td>22</td>
        <td>29</td>
        <td class="rojo">9</td>
        
      </tr> 
        <tr>
        <td>7</td>
        <td>Alianza JR </td>
        <td>13</td>
        <td>1</td>
        <td>4</td>
        <td>8</td>
        <td>14</td>
        <td>41</td>
        <td class="rojo">7</td>
      </tr> 
        <tr>
        <td>8</td>
        <td>Puerto Cortes FC</td>
        <td>13</td>
        <td>1</td>
        <td>4</td>
        <td>8</td>
        <td>22</td>
        <td>48</td>
        <td class="rojo">7</td>
      </tr> 
    </tbody>
  </table>
</div>
</div>
</template>

<style>
.rojo {
    color: red;
}

</style>
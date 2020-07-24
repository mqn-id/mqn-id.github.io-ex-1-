function resultStandingsJSON(data) {
  let standingTableHtml = `
        <div class="row">
        <div class="col s12 m12">
        <div class="card white z-depth-5">
        <div class="card-content black-text">
          <h4>Premier League Standings</h4>
          <table style="font-size:12px;" class="responsive-table">
            <thead>
              <tr >
                <th>Rank</th>
                <th>Logo</th>
                <th style="text-align:center">Club</th>
                <th>Games</th>
                <th>Won</th>
                <th>Draw</th>
                <th>Lost</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>`;
            data.standings["0"].table.forEach(function(item) {
              let url = item.team.crestUrl;
              url = url.replace(/^http:\/\//i, 'https://');
              standingTableHtml += `
                      <tr>
                        <td>${item.position}</td>
                        <td><a href="./teams.html?id=${item.team.id}"><img style="width:25px;" src="${item.team.crestUrl.replace(/^http:\/\//i, 'https://')}" onerror="this.src='../img/favicon.ico'" alt="Logo Tim"></a></td>
                        <td><a href="./teams.html?id=${item.team.id}">${item.team.name}</a></td>
                        <td>${item.playedGames}</td>
                        <td>${item.won}</td>
                        <td>${item.draw}</td>
                        <td>${item.lost}</td>
                        <td>${item.points}</td>
                      </tr>
              `;
            });
            standingTableHtml += `</tbody>
            </table>
          </div>
          </div>
          </div>
          </div>`;
   
  document.getElementById("standings").innerHTML = standingTableHtml;
}
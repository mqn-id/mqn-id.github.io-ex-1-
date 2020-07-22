function resultStandingsJSON(data) {
  let standingTableHtml = `
          <div class="card">
          <table style="font-size:12px;" class="responsive-table">
            <thead>
              <tr >
                <th></th>
                <th></th>
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
                        <td><a href="./teams.html?id=${item.team.id}"><img style="width:25px;" src="${item.team.crestUrl.replace(/^http:\/\//i, 'https://')}"></a></td>
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
            </div>`;
   
  document.getElementById("standings").innerHTML = standingTableHtml;
}
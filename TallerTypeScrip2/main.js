import { series } from './data.js';

var seriesTabla = document.getElementById('series');
var PromedioTemporadas = document.getElementById('averageSeasons');
var datoSerieCard = document.getElementById('datoSerieCard');

renderSeriesTabla(series);
renderSerieCard(imageUrl, description);

function renderSeriesTabla(series) {
    var totalTemporadas = 0;
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        var link = "<a href=\"".concat(serie.enlace, "\">").concat(serie.nombre, "</a>");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                          <td>").concat(link, "</td>\n                          <td>").concat(serie.canal, "</td>\n                          <td>").concat(serie.numTemporadas, "</td>");
        totalTemporadas += serie.numTemporadas;
        seriesTabla.appendChild(trElement);
    });
    var averageSeasons = totalTemporadas / series.length;
    PromedioTemporadas.textContent = averageSeasons.toFixed(0);
    
}

function renderSerieCard(imageUrl, description) {
    var cardHtml = "\n    <div class=\"card\" style=\"width: 18rem;\">\n      <img src=\"".concat(imageUrl, "\" class=\"card-img-top\" alt=\"Serie Image\">\n      <div class=\"card-body\">\n        <p class=\"card-text\">").concat(description, "</p>\n      </div>\n    </div>\n  ");
    datoSerieCard.innerHTML = cardHtml;
}

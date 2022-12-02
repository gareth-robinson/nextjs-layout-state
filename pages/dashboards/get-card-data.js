export default async function getCardData(card) {
  console.log(card);
  return fetch('http://scpdev-cxsuite-qal.foresee.com:8080/metric-card-data-service/clients/7711424/metricdata', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-auth-token': 'eyJhbGciOiJIUzUxMiIsImNhbGciOiJERUYifQ.eNpkkF9rgzAUxb9Lnisk6eimb1JkiOLs6sP-ZIwsZlXU6JJYHcXvvlullLKnm_zuuece7gkdW-GJRiMPnRgSDHlQLBSGwiQLnhM_ZmjFUDWjQ5o2r3jYxJF-CvBw_7ILZarlOEvU_ymz-Jm581NE_bHiDYl3D1Gc-AxNE2j6RdMbqcMc3g4BKOpSKnv9d9yYodV59ttJYBgQF6LtlU1aFbeikmfpN6-NhJZU_Ku-IQfNlZW539ui1aUt5TnSO6zlN6E__e022O8h2ceyQRrzqHlXpFzbktcXx3PucZ6ka-I6-M4hNCPUI65HyRuMoxXifQ5HvTgDkGOHPEIwpdil6w2Z_gAAAP__._ZZiLXWnwWB84leEkgHE_cfPMACrtob4O8ft_0mIpeYJ0YGUwweM_PML_Kz1gOTsYI1ts6l2BW2eAgkVPd1ECA',
    },
    body: JSON.stringify(card)
  }).then(response => response.json());
};

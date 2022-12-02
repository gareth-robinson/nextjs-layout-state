import { DashboardCard, CardHeader } from 'cx-component-library';

export default function dashboardCard({ card }) {
  return (
    <DashboardCard
      key={card.cardId}
      id={card.cardId}
      type='CARD'
      isDraggable={true}
      size={card.size}
      isDummyCard={card.isDummyCard}
      style={{
        border: card.isDummyCard ? '1px solid red' : '',
        gridColumnStart: card.gridColumnStart,
        gridColumnEnd: card.gridColumnEnd,
        gridRowStart: card.gridRowStart,
        gridRowEnd: card.gridRowEnd,
      }}
    >
      <CardHeader
        name={card.isDummyCard ? 'DUMMY' : card.name}
        errorMessage={card.errorMessage}
        cardSize={card.size || 'medium'}
        onSizeChange={s => {
          this._setSizeChange(card.cardId, s.value);
        }}
        dateRange={card.size === 'stamp' ? false : 'Last 30 Days'}
      />
      <div
        style={{ backgroundColor: card.color, height: '100%', width: '100%' }}
      ></div>
    </DashboardCard>
  );
}

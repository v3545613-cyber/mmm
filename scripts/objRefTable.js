const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.Keyboard,
		C3.Plugins.Text,
		C3.Plugins.Shape3D,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Sprite.Cnds.OnDestroyed,
		C3.Plugins.Text.Acts.AddInstanceVar,
		C3.Plugins.Text.Cnds.CompareInstanceVar,
		C3.Plugins.Text.Acts.SetText
	];
};
self.C3_JsPropNameTable = [
	{Платформер: 0},
	{СледитьЗа: 0},
	{Спрайт: 0},
	{Твёрдый: 0},
	{ТайловыйФон: 0},
	{Клавиатура: 0},
	{Спрайт2: 0},
	{point: 0},
	{Текст: 0},
	{"3DФигуры": 0}
];

self.InstanceType = {
	Спрайт: class extends self.ISpriteInstance {},
	ТайловыйФон: class extends self.ITiledBackgroundInstance {},
	Клавиатура: class extends self.IInstance {},
	Спрайт2: class extends self.ISpriteInstance {},
	Текст: class extends self.ITextInstance {},
	_3DФигуры: class extends self.I3DShapeInstance {}
}
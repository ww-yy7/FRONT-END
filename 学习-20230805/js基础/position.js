
const { orbit, TWEEN, scene, THREE } = window;

const AllText = [
  {
    "name": "2000-1-21",
    "position": {
      "x": -5931.414144552573,
      "y":1476.0730003018762,
      "z":-504.12134178566623,
    }
  },
  {
    "name": "2000-1-1",
    "position": {
      "x": -7710.455561721015,
      "y": 1940.1759785317513,
      "z": 2649.6599413030353,
    }
  },
  {
    "name": "2000-1-5",
    "position": {
      "x": -6100.487091108835,
      "y": 1851.0178197012137,
      "z": 1736.4082964542617,
    },
    },
  {
    "name": "2000-1-17",
      "position": {
          "x": -6520,
          "y": 777,
          "z": -145,
    },
    },
  

]







function tipsInfoFocus({ x, y, z }) {
  // 生成定位样式标签
  // const spriteName = 'focusSprite';
  // window.scene.getObjectByName(spriteName) && window.scene.remove(window.scene.getObjectByName(spriteName));
  // createPositionSprite({ x, y: y + 40, z }, spriteName);

  // 进入视角为45度
  window.orbit.object.updateProjectionMatrix();
  refreshCameraPosition(x, y + 500, z, x, y, z);
}
//-6699.621090141494,582.420623295555,-181.37191802092002
let cameraMoveState = false; // 是否处于相机移动状态
function refreshCameraPosition(px, py, pz, vx, vy, vz) {
  if (cameraMoveState) {
    // Message.warning('视角移动中，无法切换！');
    return;
  }
  cameraMoveState = true;
  window.orbit.enabled = false;
  const tweenA = new TWEEN.Tween(window.orbit.object.position)
    .to(
      {
        x: px,
        y: py,
        z: pz,
      },
      1000
    )
    .easing(TWEEN.Easing.Linear.None)
    .start();
  const tweenB = new TWEEN.Tween(window.orbit.target)
    .to(new THREE.Vector3(vx, vy, vz), 1000)
    .easing(TWEEN.Easing.Linear.None)
    .start()
    .onComplete(() => {
      TWEEN.remove(tweenA);
      TWEEN.remove(tweenB);
      cameraMoveState = false;
      window.orbit.enabled = true;
      window.orbit.update();
    });
}
const focus = AllText.find((item) => item.name === value);
if (!focus) {
  // this.$message.error('请输入正确的id名!');
  console.log('请输入正确的id名')
  return;
}
tipsInfoFocus(focus.position);